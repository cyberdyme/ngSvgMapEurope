import {Component, Input, OnInit} from '@angular/core';
import {IMapItem} from '../model/iMapItem';

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

  constructor() { }

  ngOnInit() {
  }

}
