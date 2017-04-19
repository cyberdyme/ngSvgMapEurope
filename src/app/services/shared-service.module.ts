import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountryDataStoreService} from './country-data-store.service';
import {CountryExternalService} from './country-external.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServiceModule,
      providers: [CountryDataStoreService, CountryExternalService]
    };
  }
}
