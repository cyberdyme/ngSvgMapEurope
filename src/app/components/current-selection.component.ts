import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-selection',
  templateUrl: './current-selection.component.html',
  styleUrls: ['./current-selection.component.scss']
})
export class CurrentSelectionComponent implements OnInit {
  @Input()
  selection: string;

  constructor() { }

  ngOnInit() {
  }

}
