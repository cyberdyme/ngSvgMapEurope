/**
 * Created by girishthanki on 02/05/2017.
 */

import {IMapItem} from '../../model/iMapItem';
import {Action} from '@ngrx/store';

export const LOAD_MAP_ITEM_INFO_ACTION = 'LOAD_MAP_ITEM_INFO_ACTION';

export class LoadAllMapItemsAction implements Action {
  readonly type = LOAD_MAP_ITEM_INFO_ACTION;
  constructor(public payload?: IMapItem[]) {
    console.log('LOAD_MAP_ITEM_INFO_ACTION =>' + payload);
  }
}

export const INITIAL_SETUP_ACTION = 'INITIAL_SETUP_ACTION';
export class InitialSetUpAction implements Action {
  readonly type = INITIAL_SETUP_ACTION;
  constructor(public payload?: any) {
  }
}

export const SELECTED_COUNTRY_CHANGED_VIA_DROPDOWN_ACTION = 'SELECTED_COUNTRY_CHANGED_VIA_DROPDOWN_ACTION';
export class SelectedCountryChangedViaDropDownAction implements Action {
  readonly type = SELECTED_COUNTRY_CHANGED_VIA_DROPDOWN_ACTION;
  constructor(public payload?: string) {
  }
}

export const SELECTED_COUNTRY_CHANGED_VIA_MAP_ACTION = 'SELECTED_COUNTRY_CHANGED_VIA_MAP_ACTION';
export class SelectedCountryChangedViaMapAction implements Action {
  readonly type = SELECTED_COUNTRY_CHANGED_VIA_MAP_ACTION;
  constructor(public payload?: string) {
  }
}

export const COUNTRY_MOUSE_OVER_ACTION = 'COUNTRY_MOUSE_OVER_ACTION';
export class CountryMouseOverAction implements Action {
  readonly type = COUNTRY_MOUSE_OVER_ACTION;
  constructor(public payload?: string) {
  }
}
