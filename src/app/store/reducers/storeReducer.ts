import {ApplicationState, INITIAL_APPLICATION_STATE} from '../ApplicationState';
import {Action} from '@ngrx/store';
import {LOAD_MAP_ITEM_INFO_ACTION, LoadAllMapItemsAction} from '../actions/LoadAllMapItemsAction';
import * as _ from 'lodash';

export function storeReducer(state: ApplicationState = INITIAL_APPLICATION_STATE, action: Action): ApplicationState {
  switch (action.type) {
    case LOAD_MAP_ITEM_INFO_ACTION:
      return loadAllPathInfo(state, action.payload);
    default:
      return state;
  }
}

function loadAllPathInfo(state: ApplicationState, payload: LoadAllMapItemsAction): ApplicationState {
  const newState = Object.assign({}, state);
  newState.dataStore.countries = _.keyBy(payload.payload, 'id');
  return newState;
}
