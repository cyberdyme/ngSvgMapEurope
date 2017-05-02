import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from './store/ApplicationState';
import {LoadAllMapItemsAction} from './store/actions/LoadAllMapItemsAction';
import {CountryExternalService} from './services/country-external.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  subscription: Subscription;

  constructor(private store: Store<ApplicationState>, private service: CountryExternalService) {
    this.store.subscribe(x => console.log("ctor = " + x));
  }

  ngOnInit() {
    this.subscription = this.service.getAllPathInfo().subscribe(x => {
      this.store.dispatch(new LoadAllMapItemsAction(x));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
