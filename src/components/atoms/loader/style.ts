import { Dimensions, StyleSheet } from 'react-native';
import Dimentions from '../../../utils/dimentions';
const size = Dimentions.Width(12);
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainCon: {
    backgroundColor: 'rgba(176, 1, 1, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    height: '100%',
    width: windowWidth,
    zIndex: 50000,
  },
  iconDesign: {
    height: Dimentions.Normalize(150),
    width: Dimentions.Width(150)
  }
});

export default styles;
