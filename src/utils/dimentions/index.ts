import {Dimensions, Platform, PixelRatio} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iPhone 8's scale
const wscale: number = SCREEN_WIDTH / 375;
const hscale: number = SCREEN_HEIGHT / 667;

const Dim = {
  Width: (value: number | string) => {
    return wp(value);
  },
  Height: (value: number | string) => {
    return hp(value);
  },
  Normalize: (size: number, based: 'width' | 'height' = 'width') => {
    const newSize = based === 'height' ? size * hscale : size * wscale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
  },
};

export default Dim;
