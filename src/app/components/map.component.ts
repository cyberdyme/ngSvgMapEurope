import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMapItem} from '../model/iMapItem';
import {ApplicationState} from '../store/applicationState';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  viewBox: number[] = [1754, 161, 6938, 7945];

  @Input()
  mapItemsForEurope: IMapItem[];

  @Input()
  mapItemsForRussia: IMapItem[];

  @Input()
  selectedCountry: string;

  @Output()
  countrySelected = new EventEmitter<string>();

  @Output()
  countryMouseOverInfo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  mouseOver(country: any) {
    this.countryMouseOverInfo.next(country.currentTarget.id);
  }

  mouseLeave() {
    this.countryMouseOverInfo.next(undefined);
  }

  mouseClick(country: any) {
    this.countrySelected.next(country.currentTarget.id);
  }
}
