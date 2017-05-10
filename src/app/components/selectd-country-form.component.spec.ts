import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdCountryFormComponent } from './selectd-country-form.component';

describe('SelectdCountryFormComponent', () => {
  let component: SelectdCountryFormComponent;
  let fixture: ComponentFixture<SelectdCountryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectdCountryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdCountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
