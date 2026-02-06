import React from 'react';
import { ScrollView, View } from 'react-native';
import { SubHeading, SimpleText } from '../../components/atoms/text';
import styles from './style';

interface Props {
  route: {
    params: {
      user: any;
    };
  };
}

const UserDetail: React.FC<Props> = ({ route }) => {
  const { user } = route.params;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerCard}>
        <SubHeading style={styles.name}>{user.name}</SubHeading>
        <SimpleText style={styles.username}>@{user.username}</SimpleText>
        <SimpleText style={styles.email}>✉️ {user.email}</SimpleText>
      </View>
      <View style={styles.card}>
        <SubHeading style={styles.sectionTitle}>Contact</SubHeading>
        <SimpleText style={styles.row}>📞 {user.phone}</SimpleText>
        <SimpleText style={styles.row}>🌐 {user.website}</SimpleText>
      </View>
      <View style={styles.card}>
        <SubHeading style={styles.sectionTitle}>Address</SubHeading>
        <SimpleText style={styles.row}>
          {user.address.street}, {user.address.suite}
        </SimpleText>
        <SimpleText style={styles.row}>
          {user.address.city} - {user.address.zipcode}
        </SimpleText>
      </View>
      <View style={styles.card}>
        <SubHeading style={styles.sectionTitle}>Company</SubHeading>
        <SimpleText style={styles.companyName}>{user.company.name}</SimpleText>
        <SimpleText style={styles.quote}>
          “{user.company.catchPhrase}”
        </SimpleText>
        <SimpleText style={styles.row}>{user.company.bs}</SimpleText>
      </View>
    </ScrollView>
  );
};

export default UserDetail;
