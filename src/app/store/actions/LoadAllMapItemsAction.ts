/**
 * Created by girishthanki on 02/05/2017.
 */

import {Action} from '@ngrx/store';
import {IMapItem} from '../../model/IMapItem';

export const LOAD_MAP_ITEM_INFO_ACTION = 'LOAD_MAP_ITEM_INFO_ACTION';

export class LoadAllMapItemsAction implements Action {
  type = LOAD_MAP_ITEM_INFO_ACTION;
  constructor(public payload?: IMapItem[]) {
  }
}
