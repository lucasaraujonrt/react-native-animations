import { Dimensions, Platform, PixelRatio } from 'react-native';

export const winWidth = Dimensions.get('window').width;
export const winHeight = Dimensions.get('window').height;
export const winFont = Dimensions.get('window').fontScale;

const guidelineBaseWidth = 350;

export const widthScale = (percentage: number) =>
  Dimensions.get('window').width * percentage;

export const heightScale = (percentage: number) =>
  Dimensions.get('window').height * percentage;

export const fontScale = (size: number) =>
  size * (winWidth / guidelineBaseWidth);

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / 375;
const hscale: number = SCREEN_HEIGHT / 667;

const normalize = (size: number, based: 'width' | 'height' = 'width') => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const normalizeWidth = (width: number) => normalize(width, 'width');
export const normalizeHeight = (height: number) => normalize(height, 'height');
export const normalizeScale = (scale: number) => normalize(scale);

export const platform = (android: number, ios: number) =>
  Platform.select({ android, ios });
