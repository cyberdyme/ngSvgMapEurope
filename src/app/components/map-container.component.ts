import { Component, OnInit } from '@angular/core';
import {IMapItem} from '../model/iMapItem';
import {ApplicationState} from '../store/applicationState';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as  _ from 'lodash';
import {SelectedCountryChangedViaMapAction} from "../store/actions/loadAllMapItemsAction";

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {
  pathsListForEurope$: Observable<IMapItem[]>;
  pathsListForRussia$: Observable<IMapItem[]>;
  selectedCountry$: Observable<string>;

  constructor(private store: Store<ApplicationState>) {
  }

  getCounteries(state: ApplicationState): IMapItem[] {
    if (!state.dataStore.countries) {
      return [];
    }
    return _.values<IMapItem>(state.dataStore.countries);
  }

  ngOnInit() {
    this.pathsListForEurope$ = this.store.select(x => _.filter(this.getCounteries(x), (y: IMapItem) => y.id !== 'ru'));
    this.pathsListForRussia$ = this.store.select(x => _.filter(this.getCounteries(x), (y: IMapItem) => y.id === 'ru'));
    this.selectedCountry$ = this.store.select(x => x.uiState.selectedCountry).do(y => console.log('stream' + y));
  }

  onCountrySelection(country: string) {
    this.store.dispatch(new SelectedCountryChangedViaMapAction(country));
  }
}
