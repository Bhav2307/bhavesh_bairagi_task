import {
  ParamListBase,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Pressable,
  RefreshControl,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { SubHeading, SimpleText } from '../../components/atoms/text';
import { useAppDispatch } from '../../store/hooks';
import Dim from '../../utils/dimentions';
import styles from './style';
import Loader from '../../components/atoms/loader';
import { userList } from '../../store/slices/requestSlice';
import { ToastMessage } from '../../components/atoms/toastMessage';
import Colors from '../../utils/colors';

const LIMIT = 5;

const UserList: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const focus = useIsFocused();
  const flatListRef = useRef<FlatList>(null);
  const [page, setPage] = useState(1);
  const [pull, setPull] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [fullData, setFullData] = useState<any[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (focus) {
      resetAndLoad();
    }
  }, [focus]);

  const resetAndLoad = () => {
    setPage(1);
    setHasMore(true);
    setSearchText('');
    setData([]);
    setFullData([]);
    fetchUsers(1, true);
  };

  const fetchUsers = async (pageNo: number, isRefresh = false) => {
    if (!hasMore && !isRefresh) return;

    setLoading(true);

    try {
      const res: any = await dispatch(
        userList({ _page: pageNo, _limit: LIMIT }),
      ).unwrap();

      const newData = res ?? [];

      setFullData(prev => (pageNo === 1 ? newData : [...prev, ...newData]));

      setData(prev => (pageNo === 1 ? newData : [...prev, ...newData]));

      if (newData.length < LIMIT) {
        setHasMore(false);
      }
    } catch (err) {
      ToastMessage({ type: 'error', message: JSON.stringify(err) });
    } finally {
      setLoading(false);
      setPull(false);
    }
  };

  const loadMore = () => {
    if (loading || !hasMore || searchText.length > 0) return;

    const nextPage = page + 1;
    setPage(nextPage);
    fetchUsers(nextPage);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim() === '') {
        setData(fullData);
      } else {
        const filtered = fullData.filter(item =>
          item?.name?.toLowerCase().includes(searchText.toLowerCase()),
        );
        setData(filtered);
        flatListRef.current?.scrollToOffset({
          offset: 0,
          animated: true,
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText, fullData]);

  const OnCardPress = (item: any) => {
    navigation.navigate('UserDetail', { user: item });
  };

  const renderItem = useCallback(({ item }: any) => {
    return (
      <Pressable
        style={styles.productCard}
        onPress={OnCardPress.bind(this, item)}
      >
        <SubHeading style={styles.name}>{item?.name}</SubHeading>
        <SimpleText style={styles.username}>@{item?.username}</SimpleText>
        <View style={styles.divider} />
        <SimpleText style={styles.userDetailTxt}>✉️ {item?.email}</SimpleText>
        <SimpleText style={styles.userDetailTxt}>📞 {item?.phone}</SimpleText>
      </Pressable>
    );
  }, []);

  return (
    <>
      {loading && page === 1 && <Loader />}
      <View style={styles.searchContainer}>
        <SimpleText style={styles.searchIcon}>🔍</SimpleText>
        <TextInput
          placeholder="Search by name"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{
          paddingBottom: Dim.Height(5),
          marginTop: Dim.Normalize(20),
          alignItems: 'center',
          flexGrow: data.length === 0 ? 1 : 0,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={pull}
            onRefresh={() => {
              setPull(true);
              resetAndLoad();
            }}
          />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && page > 1 ? (
            <ActivityIndicator size={'small'} color={Colors.PrimaryColor} />
          ) : null
        }
        ListEmptyComponent={
          !loading ? (
            <SubHeading style={styles.noDataTxt}>No Data Found</SubHeading>
          ) : null
        }
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={7}
        removeClippedSubviews
      />
    </>
  );
};

export default UserList;
