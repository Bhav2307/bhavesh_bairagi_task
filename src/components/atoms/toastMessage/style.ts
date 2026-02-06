import {StyleSheet} from 'react-native';
import Dim from '../../../utils/dimentions';
import Colors from '../../../utils/colors';

const styles = StyleSheet.create({
  baseContainer: {
    paddingHorizontal: 15,
    width: Dim.Width(80),
  },
  successToast: {
    borderLeftColor: Colors.PrimaryColor,
  },
  successText: {
    color: Colors.Black,
  },
  errorToast: {
    borderLeftColor: Colors.ErrorText,
    maxHeight: Dim.Height(12),
    width: Dim.Width(80),
  },
  errorText: {
    color: Colors.ErrorText,
  }
});

export default styles;
