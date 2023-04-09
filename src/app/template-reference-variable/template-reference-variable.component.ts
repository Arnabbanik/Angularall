import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(inputel: HTMLInputElement){

    alert("Hello"+ inputel.value);
  }

  // selectedCustomer;
  customers: Customer[] = [
    {customerNo:1, name: "Arnab",address:"Ashokenagar",city:"kolkata",country:"India"},
    {customerNo:1, name: "aftab",address:"Lamp",city:"Newyork",country:"America"}
  ];
}
