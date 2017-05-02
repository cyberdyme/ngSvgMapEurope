/**
 * Created by girishthanki on 02/05/2017.
 */

import {Action} from '@ngrx/store';
import {IPathInfo} from '../../model/IPathInfo';

export const LOAD_ALL_PATH_INFO_ACTION = 'LOAD_ALL_PATH_INFO_ACTION';

export class LoadAllPathInfoAction implements Action {
  type = LOAD_ALL_PATH_INFO_ACTION;

  constructor(public payload?: IPathInfo[]) {
  }
}
