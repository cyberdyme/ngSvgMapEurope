import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SharedServiceModule} from './services/shared-service.module';
import {StoreModule} from '@ngrx/store';
import {INITIAL_APPLICATION_STATE} from './store/ApplicationState';
import {storeReducer} from './store/reducers/storeReducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedServiceModule.forRoot(),
    StoreModule.provideStore({ storeReducer }, INITIAL_APPLICATION_STATE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
