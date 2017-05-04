/**
 * Created by girishthanki on 03/05/2017.
 */


import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {CountryExternalService} from '../../services/country-external.service';
import {Observable} from 'rxjs/Observable';
import {INITIAL_SETUP_ACTION, LoadAllMapItemsAction} from '../actions/loadAllMapItemsAction';
import 'rxjs/add/operator/switchMap';
import {Action} from '@ngrx/store';
import {IMapItem} from '../../model/iMapItem';

@Injectable()
export class LoadCountriesEffect {

  @Effect() newMessages$: Observable<Action> = this.actions$
    .ofType(INITIAL_SETUP_ACTION)
    .switchMap(() => this.countryServices.getAllPathInfo())
    .do(x => 'effects' + console.log(x))
    .map((x: IMapItem[]) => new LoadAllMapItemsAction(x));

  constructor(private actions$: Actions, private countryServices: CountryExternalService) {
  }
}
