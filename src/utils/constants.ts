import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const screenWidth = width;
export const screenHeight = height;

export const CL_PAGES = {
  home: 'Home',
  details: 'Details',
};

export const CL_COLORS = {
  secondary: '#746A64',
  white: '#FFFFFF',
  gray: '#DEDEDE',
  white100: '#FAFAFA',
};

export const CL_TEXTS = {
  home_title: 'Pop Movies',
  detail_title: 'Movie Details',
  add_favorite: 'Add to Favorite',
  trailers: 'TRAILERS',
  play_trailer: 'Play trailer',
};
