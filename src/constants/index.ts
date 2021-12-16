import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

export const PanGestureConstants = {
  CARD_WIDTH: width * 0.8,
  CARD_HEIGHT: CARD_WIDTH * ratio,
};

export const Transition = {};

export const SquareStick = {
  SIZE: 150,
  V_FACTOR: 2.5,
  H_FACTOR: 0.3,
  progress: 1,
  MAX_HEIGHT: 150 * 2.5,
};
