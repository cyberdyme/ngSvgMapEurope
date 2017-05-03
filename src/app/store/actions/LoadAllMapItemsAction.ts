/**
 * Created by girishthanki on 02/05/2017.
 */

import {IMapItem} from '../../model/IMapItem';
import {Action} from '@ngrx/store';

export const LOAD_MAP_ITEM_INFO_ACTION = 'LOAD_MAP_ITEM_INFO_ACTION';

export class LoadAllMapItemsAction implements Action {
  readonly type = LOAD_MAP_ITEM_INFO_ACTION;
  constructor(public payload?: IMapItem[]) {
  }
}
