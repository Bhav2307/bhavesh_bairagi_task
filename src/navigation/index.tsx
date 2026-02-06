import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import Splash from '../screens/splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from '../screens/userList';
import UserDetail from '../screens/userDetail';

export type RootStackParamList = {
  Splash: undefined;
  UserList: undefined;
  UserDetail: { user: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />

          <Stack.Screen
            name="UserList"
            component={UserList}
            options={{
              headerShown: true,
              headerTitle : 'User List',
            }}
          />

          <Stack.Screen
            name="UserDetail"
            component={UserDetail}
            options={{
              headerShown: true,
              headerTitle : 'User Detail',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainStack;
