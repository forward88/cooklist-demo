import {CL_PAGES} from './utils/constants';

type ValueOf<T> = T[keyof T];
export type RootStackParamList = {
  [key in ValueOf<typeof CL_PAGES>]: any;
};
