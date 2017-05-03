import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SharedServiceModule} from './services/shared-service.module';
import {StoreModule} from '@ngrx/store';
import {INITIAL_APPLICATION_STATE} from './store/ApplicationState';
import {storeReducer} from './store/reducers/storeReducer';
import {EuropeMapComponent} from './components/europe-map.component';
import {EffectsModule} from '@ngrx/effects';
import {LoadCountriesEffect} from './store/effects/loadcountries.effect';

@NgModule({
  declarations: [
    AppComponent,
    EuropeMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedServiceModule.forRoot(),
    StoreModule.provideStore(storeReducer, INITIAL_APPLICATION_STATE),
    EffectsModule.run(LoadCountriesEffect),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
