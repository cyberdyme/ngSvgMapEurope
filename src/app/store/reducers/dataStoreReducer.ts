import {DataStore} from '../DataStore';
import {IMapItem} from '../../model/IMapItem';
import {LOAD_MAP_ITEM_INFO_ACTION} from '../actions/LoadAllMapItemsAction';
import {Action} from '@ngrx/store';
import * as _ from 'lodash';

export function dataStoreReducer(dataStore: DataStore, action?: Action): DataStore {
  switch (action.type) {
    case LOAD_MAP_ITEM_INFO_ACTION:
      return loadAllPathInfo(dataStore, action.payload);
    default:
      return dataStore;
  }
}

function loadAllPathInfo(state: DataStore, payload?: IMapItem[]): DataStore {
  const newState = Object.assign({}, state);
  newState.countries = _.keyBy(payload, 'id');
  return newState;
}
