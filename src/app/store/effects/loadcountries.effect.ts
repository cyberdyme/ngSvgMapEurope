/**
 * Created by girishthanki on 03/05/2017.
 */


import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {CountryExternalService} from '../../services/country-external.service';
import {Observable} from 'rxjs/Observable';
import {LOAD_MAP_ITEM_INFO_ACTION, LoadAllMapItemsAction} from '../actions/LoadAllMapItemsAction';
import 'rxjs/add/operator/switchMap';
import {Action} from '@ngrx/store';
import {IMapItem} from '../../model/IMapItem';

@Injectable()
export class LoadCountriesEffect {
  constructor(private actions$: Actions, private countryServices: CountryExternalService) {
  }

  @Effect() newMessages$: Observable<Action> = this.actions$
    .ofType(LOAD_MAP_ITEM_INFO_ACTION)
    .switchMap(() => this.countryServices.getAllPathInfo())
    .map((x: IMapItem[]) => new LoadAllMapItemsAction(x));
}
