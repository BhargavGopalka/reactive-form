import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor(private http: Http) { }


  cName = '';
  cCapital = '';
  cDemonym = '';
  searchCapital(){
    this.http.get('https://restcountries.eu/rest/v2/name/' + this.cName)
      .subscribe((response: Response) => {
        const cap = response.json();
        console.log(cap);
        this.cCapital = cap;
      })
  }

  countries = [];
  countryInformation(){
    this.http.get('https://restcountries.eu/rest/v2/all')
      .subscribe((res: Response) => {
        this.countries = res.json();
        console.log(this.countries);
        /*console.log(infoCoun);
        for (let i = 0; i < infoCoun.length; i++){
          this.cName = infoCoun[i].name;
          this.cCapital = infoCoun[i].capital;
          this.cDemonym = infoCoun[i].demonym;
          console.log(this.cName, this.cCapital, this.cDemonym);
          this.countries.push({cN : this.cName, cC :  this.cCapital, cD : this.cDemonym});
          console.log(this.countries);
        }*/
      })
  }

  ngOnInit() {
    this.countryInformation();
  }

}
