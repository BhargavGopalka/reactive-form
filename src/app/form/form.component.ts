import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.newForm = this.fb.group({
      name: [''],
      addresses: this.fb.array([
        this.fb.group({
          addLineOne: [''],
          addLineTwo: [''],
          city: [''],
          country: ['']
        })
      ]),
      gender: [''],
      car: ['']
    });
    console.log(this.newForm);
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
