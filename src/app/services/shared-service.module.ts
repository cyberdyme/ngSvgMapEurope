import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
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
      providers: [CountryExternalService]
    };
  }
}
