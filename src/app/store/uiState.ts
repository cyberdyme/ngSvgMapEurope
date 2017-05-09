/**
 * Created by girishthanki on 02/05/2017.
 */

export  interface UiState {
  currentCountry: number;
  selectedCountry: string;
  hoverOverCountry: string;
};

export const INITIAL_UI_STATE: UiState = {
  currentCountry: undefined,
  selectedCountry: undefined,
  hoverOverCountry: undefined
};
