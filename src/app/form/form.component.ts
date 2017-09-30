import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newForm: FormGroup;

  constructor( private fb: FormBuilder ){ }

  ngOnInit() {
    this.newForm = this.fb.group({
      name: [''],
      address: [''],
      gender: [''],
      car: ['']
    });
  }

  addInfo() {
    const addInfo = {
      name: this.newForm.controls['name'].value,
      address: this.newForm.controls['address'].value,
      gender: this.newForm.controls['gender'].value,
      car: this.newForm.controls['car'].value
    };

    console.log(addInfo);
    this.newForm.reset();
  }

}
