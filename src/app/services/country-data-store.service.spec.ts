import { TestBed, inject } from '@angular/core/testing';

import { CountryDataStoreService } from './country-data-store.service';

describe('CountryDataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryDataStoreService]
    });
  });

  it('should ...', inject([CountryDataStoreService], (service: CountryDataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
