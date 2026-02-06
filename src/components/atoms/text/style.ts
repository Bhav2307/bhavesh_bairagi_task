import { StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';
import Dim from '../../../utils/dimentions';

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: Dim.Normalize(15),
    color: Colors.Black,
    textAlign: 'left',
  },

  mainTitle: {
    fontSize: Dim.Normalize(20),
    color: Colors.Black,
    textAlign: 'left',
  },
  subHeading: {
    fontSize: Dim.Normalize(13),
    color: Colors.Black,
    textAlign: 'left',
  },
  simpleText: {
    fontSize: Dim.Normalize(11),
    color: Colors.Black,
    textAlign: 'left',
  },
  smallText: {
    fontSize: Dim.Normalize(7),
    color: Colors.Black,
    textAlign: 'left',
  },
});

export default styles;
