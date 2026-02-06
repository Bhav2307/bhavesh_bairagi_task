import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Toast from 'react-native-toast-message';
import ToastConfig from './src/components/atoms/toastMessage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MainStack from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{flex: 1}}
        edges={['bottom', 'top']}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Provider store={store}>
            <MainStack />
            <Toast config={ToastConfig} />
          </Provider>
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
