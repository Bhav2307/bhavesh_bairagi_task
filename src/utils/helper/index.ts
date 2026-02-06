import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';

const Helper = {
  isNetAvailable: async () => {
    let isNetConnected = false;
    await NetInfo.fetch().then(state => {
      try {
        if (state.isConnected) {
          isNetConnected = true;
        } else {
          isNetConnected = false;
        }
      } catch (err) {}
    });
    return isNetConnected;
  },
};

export default Helper;
