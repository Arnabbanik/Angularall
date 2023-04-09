import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
 
@Component({
  selector: 'app-dirrective-ex',
  templateUrl: './dirrective-ex.component.html',
  styleUrls: ['./dirrective-ex.component.css']
})
export class DirrectiveExComponent {

  display: boolean =false;

  fadeMeOut(){

  this.display = true;

 }

  products=[

 {title: "cardiology",subtitle: "DR s",description: "We have very experienced Doctors assembly",available: "Available"},

 {title: "Gynology",subtitle: "DR Basu",description: "We have very *experienced Doctors assembly", available: "Not Available"},

 {title: "ENT",subtitle: "DR Kanu",description: "We have very *experienced Doctors assembly", available:"Available"},

 ]

}
