import { Platform, StyleSheet } from 'react-native';
import Dim from '../../utils/dimentions';
import Colors from '../../utils/colors';

const SIZE = Dim.Normalize(300);
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PrimaryColor,
  },
  infoContainer: {
    width: SIZE,
    height: SIZE,
    backgroundColor: Colors.White,
    borderRadius: Dim.Normalize(20),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  subTxt:{
    textAlign : 'center'
  }
});
export default styles;
