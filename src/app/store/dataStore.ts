import {IMapItem} from '../model/iMapItem';

export interface DataStore {
  countries: {[key: number]: IMapItem};
}

export const INITIAL_DATA_STORE: DataStore = {
  countries: {}
};
