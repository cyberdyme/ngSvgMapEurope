import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-selectd-country-form',
  templateUrl: './selectd-country-form.component.html',
  styleUrls: ['./selectd-country-form.component.scss']
})
export class SelectdCountryFormComponent implements OnInit {
  selectedCountryForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.selectedCountryForm = this.fb.group(
      {
        id : ['id'],
        name: ['name']
      });
  }
}
