import { TestBed, inject } from '@angular/core/testing';

import { CountryExternalService } from './country-external.service';

describe('CountryExternalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryExternalService]
    });
  });

  it('should ...', inject([CountryExternalService], (service: CountryExternalService) => {
    expect(service).toBeTruthy();
  }));
});
