import {INITIAL_SETUP_ACTION} from '../actions/loadAllMapItemsAction';
import {UiState} from '../uiState';
import {Action} from '@ngrx/store';

export function uiStateReducer(state: UiState, action?: Action): UiState {
  switch (action.type) {
    case INITIAL_SETUP_ACTION:
    default:
      return state;
  }
}
