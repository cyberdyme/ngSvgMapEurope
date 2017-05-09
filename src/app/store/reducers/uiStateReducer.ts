import {
  COUNTRY_MOUSE_OVER_ACTION,
  INITIAL_SETUP_ACTION,
  SELECTED_COUNTRY_CHANGED_VIA_DROPDOWN_ACTION,
  SELECTED_COUNTRY_CHANGED_VIA_MAP_ACTION
} from '../actions/loadAllMapItemsAction';
import {UiState} from '../uiState';
import {Action} from '@ngrx/store';

export function uiStateReducer(state: UiState, action?: Action): UiState {
  switch (action.type) {
    case SELECTED_COUNTRY_CHANGED_VIA_DROPDOWN_ACTION:
    case SELECTED_COUNTRY_CHANGED_VIA_MAP_ACTION:
      return selectCountryChanged(state, action.payload);

    case COUNTRY_MOUSE_OVER_ACTION:
      return selectCountryMouseOverChanged(state, action.payload);

    case INITIAL_SETUP_ACTION:
    default:
      return state;
  }
}

function selectCountryChanged(state: UiState, payload?: string): UiState {
  const newState = Object.assign({}, state);
  newState.selectedCountry = payload;
  return newState;
}

function selectCountryMouseOverChanged(state: UiState, payload?: string): UiState {
  const newState = Object.assign({}, state);
  newState.hoverOverCountry = payload;
  return newState;
}
