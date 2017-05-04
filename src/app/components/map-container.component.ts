import { Component, OnInit } from '@angular/core';
import {IMapItem} from '../model/IMapItem';
import {ApplicationState} from '../store/ApplicationState';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as  _ from 'lodash';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {
  pathsListForEurope$: Observable<IMapItem[]>;
  pathsListForRussia$: Observable<IMapItem[]>;
  viewBox: number[] = [1754, 161, 6938, 7945];

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
  }
}
