import {DataStore} from '../dataStore';
import {IMapItem} from '../../model/iMapItem';
import {LOAD_MAP_ITEM_INFO_ACTION} from '../actions/loadAllMapItemsAction';
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
