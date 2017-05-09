import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SharedServiceModule} from './services/shared-service.module';
import {StoreModule} from '@ngrx/store';
import {INITIAL_APPLICATION_STATE} from './store/applicationState';
import {storeReducer} from './store/reducers/storeReducer';
import {EffectsModule} from '@ngrx/effects';
import {LoadCountriesEffect} from './store/effects/loadcountries.effect';
import { MapContainerComponent } from './components/map-container.component';
import { MapComponent } from './components/map.component';
import { HeaderComponent } from './components/header.component';
import {DropdownModule, PanelModule, TabViewModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SelectCountryInfoComponent } from './components/select-country-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MapContainerComponent,
    MapComponent,
    HeaderComponent,
    SelectCountryInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedServiceModule.forRoot(),
    StoreModule.provideStore(storeReducer, INITIAL_APPLICATION_STATE),
    EffectsModule.run(LoadCountriesEffect),
    BrowserAnimationsModule,
    TabViewModule,
    PanelModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
