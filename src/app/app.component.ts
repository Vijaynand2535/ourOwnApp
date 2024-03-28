import { Component } from '@angular/core';
import { Istudent } from './models/students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ourOwnApp';
  skills : Array<string> = ["HTML","CSS","JS","TS","ANGULAR"]

  stdArr : Array<Istudent> = [
    {
      fname : "Raj",
      lname : "Gowda",
      email : "rajp@1234",
      contact : 8877445522
    },
    {
      fname : "Channaveer",
      lname : "Gound",
      email : "cgound@1234",
      contact : 9578634525
    },
    {
      fname : "Jeevita",
      lname : "Gowda",
      email : "jgowda@1234",
      contact : 9825362414
    },
    {
      fname : "Swap",
      lname : "Chowdari",
      email : "swapc@1234",
      contact : 9285690480
    },
    {
      fname : "Tejas",
      lname : "thing",
      email : "tejasT@1234",
      contact : 8956887420
    },


  ]
}
