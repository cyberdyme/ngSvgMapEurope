import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApplicationState} from '../store/applicationState';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/map';
import * as  _ from 'lodash';
import {SelectItem} from 'primeng/primeng';
import {IMapItem} from '../model/iMapItem';
import {SelectedCountryChangedViaMapAction} from '../store/actions/loadAllMapItemsAction';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-select-country-info',
  templateUrl: './select-country-info.component.html',
  styleUrls: ['./select-country-info.component.scss']
})
export class SelectCountryInfoComponent implements OnInit, OnDestroy {
  countries$: Observable<SelectItem[]>;
  selectedCountry$: Observable<IMapItem>;
  selectedCity: IMapItem;
  selectedCitySubscription: Subscription;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.countries$ = this.store.select(x => _.concat(this.getBlankItemLabel(), this.getCountries(x)));
    this.selectedCountry$ = this.store.select(x => x.dataStore.countries[x.uiState.selectedCountry]);
    this.selectedCitySubscription = this.selectedCountry$.subscribe(y => {
      this.selectedCity = y;
    });
  }
  ngOnDestroy(): void {
    this.selectedCitySubscription.unsubscribe();
  }

  getCountries(state: ApplicationState) {
    return _.orderBy(_.values(state.dataStore.countries)
      .filter(z => z.name && z.name.length > 0)
      .map(y => this.getSelectedItemLabel(y)), 'label');
  }

  getBlankItemLabel(): any {
    return {
      label: 'Select an item',
      value: null,
    };
  }

  getSelectedItemLabel(m: IMapItem): any {
    return {
      label: m.name,
      value: m
    };
  }

  selectionChanged() {
    this.store.dispatch(new SelectedCountryChangedViaMapAction(this.selectedCity.id));
  }
}
