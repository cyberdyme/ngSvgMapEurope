import {ApplicationState, INITIAL_APPLICATION_STATE} from '../ApplicationState';
import {Action} from '@ngrx/store';
import {LOAD_ALL_PATH_INFO_ACTION, LoadAllPathInfoAction} from '../actions/LoadAllCountryInfoAction';
import * as _ from 'lodash';

export function storeReducer(state: ApplicationState = INITIAL_APPLICATION_STATE, payload: Action): ApplicationState {
  switch (payload.type) {
    case LOAD_ALL_PATH_INFO_ACTION:
      return loadAllPathInfo(state, payload);
    default:
      return state;
  }
}

function loadAllPathInfo(state: ApplicationState, payload: LoadAllPathInfoAction): ApplicationState {
  const newState = Object.assign({}, state);
  newState.dataStore.pathInfo = _.keyBy(payload.payload, 'id');

  console.log('============');
  console.log(JSON.stringify(newState.dataStore.pathInfo));
  return newState;
}
