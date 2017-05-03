import {Component, OnInit, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IMapItem} from '../model/IMapItem';
import {ApplicationState} from '../store/ApplicationState';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Component({
  selector: 'app-europe-map',
  templateUrl: './europe-map.component.html',
  styleUrls: ['./europe-map.component.css']
})
export class EuropeMapComponent implements OnInit {
  pathsListForEurope$: Observable<IMapItem[]>;
  pathsListForRussia$: Observable<IMapItem[]>;
  viewBox: number[] = [1754, 161, 6938, 7945];

  constructor(private store: Store<ApplicationState>) {
    this.pathsListForEurope$ = this.store.select(x => _.filter(this.getCounteries(x), (y: IMapItem) => y.id !== 'ru'));
    this.pathsListForRussia$ = this.store.select(x => _.filter(this.getCounteries(x), (y: IMapItem) => y.id === 'ru'));

  }

  getCounteries(state: ApplicationState): IMapItem[] {
    if (!state.dataStore.countries) {
      return [];
    }

    return _.values<IMapItem>(state.dataStore.countries);
  }

  ngOnInit() {
  }

  mouseOver(event) {
  }

  mouseOut(event) {
  }

  mouseClick(event) {
  }
}
