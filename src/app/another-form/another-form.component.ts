import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-another-form',
  templateUrl: './another-form.component.html',
  styleUrls: ['./another-form.component.css']
})
export class AnotherFormComponent implements OnInit {

  details = [];
  numbers = [];
  detailForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: Http) {
    this.numbers = new Array(60).fill(1).map((x, i) => i + 1);
  }

  ngOnInit() {
    this.detailForm = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      age: ['']
    });
  }

  // countryCapital = '';
  // countryRegion = '';
  // countryPopulation = '';
  countryName = '';
  cns = [];

  searchCountry() {
    this.http.get('https://restcountries.eu/rest/v2/name/' + this.countryName)
      .subscribe((res: Response) => {
        this.cns = res.json();
        // console.log(infoCountry);
        // for (let i = 0; i < infoCountry.length; i++){
        //   this.countryCapital = infoCountry[i].capital;
        //   this.countryRegion = infoCountry[i].region;
        //   this.countryPopulation = infoCountry[i].population;
        //   console.log(this.countryCapital, this.countryRegion, this.countryPopulation);
        //   this.cns.push({cC : this.countryCapital, cR :  this.countryRegion, cP : this.countryPopulation});
        console.log(this.cns);

      })
  }

  addToTable(form: any) {

    this.details.push(form.value);
    this.detailForm.reset();
  }

}
