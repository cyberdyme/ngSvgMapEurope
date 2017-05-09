import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCountryInfoComponent } from './select-country-info.component';

describe('SelectCountryInfoComponent', () => {
  let component: SelectCountryInfoComponent;
  let fixture: ComponentFixture<SelectCountryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCountryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
