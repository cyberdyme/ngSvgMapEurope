import {ApplicationState, INITIAL_APPLICATION_STATE} from '../ApplicationState';
import {Action} from '@ngrx/store';
import {uiStateReducer} from './uiStateReducer';
import {dataStoreReducer} from './dataStoreReducer';

export function storeReducer(state: ApplicationState = INITIAL_APPLICATION_STATE, action?: Action): ApplicationState {
  return {
    uiState: uiStateReducer(state.uiState, action),
    dataStore : dataStoreReducer(state.dataStore, action)
  };
}
