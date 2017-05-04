/**
 * Created by girishthanki on 02/05/2017.
 */

import {INITIAL_UI_STATE, UiState} from './uiState';
import {DataStore, INITIAL_DATA_STORE} from './dataStore';


export interface ApplicationState {
  uiState: UiState;
  dataStore: DataStore;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  uiState: INITIAL_UI_STATE,
  dataStore: INITIAL_DATA_STORE
};
