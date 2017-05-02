import {IMapItem} from '../model/IMapItem';
import {IPathInfo} from '../model/IPathInfo';

export interface DataStore {
  countries: {[key: number]: IMapItem};
  pathInfo: {[key: number]: IPathInfo};
}

export const INITIAL_DATA_STORE: DataStore = {
  countries: {},
  pathInfo: {}
};
