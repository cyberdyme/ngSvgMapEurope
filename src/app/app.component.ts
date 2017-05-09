import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from './store/applicationState';
import {InitialSetUpAction} from './store/actions/loadAllMapItemsAction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app works!';

  constructor(private store: Store<ApplicationState>) {
    // this.store.subscribe(x => console.log(' ctor = ' + x));
  }

  ngOnInit() {
    this.store.dispatch(new InitialSetUpAction(null));
  }
}
