import { View } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import styles from './style';
import React from 'react';
import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const HalfHeight = height / 2;

const ToastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      text2NumberOfLines={4}
      style={styles.successToast}
      contentContainerStyle={styles.baseContainer}
      text1Style={styles.successText}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1NumberOfLines={4}
      style={styles.errorToast}
      text1Style={styles.errorText}
    />
  ),
};

export default ToastConfig;

export interface ToastProps {
  type?: 'success' | 'error';
  message: string;
}

export const ToastMessage = ({
  type = 'success',
  message,
}: ToastProps): void => {
  if (!message) return;

  Toast.show({
    type,
    text1: message.toString(),
    position: 'top',
    visibilityTime: 5000,
    autoHide: true,
    topOffset: 50,
  });
};

