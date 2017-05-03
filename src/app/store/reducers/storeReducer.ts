import {ApplicationState, INITIAL_APPLICATION_STATE} from '../ApplicationState';
import {Action} from '@ngrx/store';
import {
  INITIAL_SETUP_ACTION, InitialSetUpAction, LOAD_MAP_ITEM_INFO_ACTION,
  LoadAllMapItemsAction
} from '../actions/LoadAllMapItemsAction';
import * as _ from 'lodash';
import {IMapItem} from "../../model/IMapItem";

export function storeReducer(state: ApplicationState = INITIAL_APPLICATION_STATE, action?: Action): ApplicationState {
  switch (action.type) {
    case INITIAL_SETUP_ACTION:
      return InitialSetupAction(state, action.payload)
    case LOAD_MAP_ITEM_INFO_ACTION:
      debugger;
      return loadAllPathInfo(state, action.payload);
    default:
      return state;
  }
}

function loadAllPathInfo(state: ApplicationState, payload?: IMapItem[]): ApplicationState {
  const newState = Object.assign({}, state);

  newState.dataStore.countries = _.keyBy(payload, 'id');
  return newState;
}

function InitialSetupAction(state: ApplicationState, payload?: any): ApplicationState {
  const newState = Object.assign({}, state);
  return newState;
}
