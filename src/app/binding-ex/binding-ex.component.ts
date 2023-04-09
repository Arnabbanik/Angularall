import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-ex',
  templateUrl: './binding-ex.component.html',
  styleUrls: ['./binding-ex.component.css']
})
export class BindingExComponent implements OnInit {

  constructor() { }

  //interpolaiton
  title: string = "This is an example of String-Interpolation";

  //property binding
  propertyvalue:boolean = false;
  expression: string = "backgroud-color: yellow";
  fontcolor: string = "red";

  //event binding
  visible: boolean = false;
  onSubmit(){
    this.visible = true;
  }
  //event binding example2
  searchval: string = '';
  changesearchval(eventData: any){
    this.searchval = (<HTMLInputElement>eventData.target).value;
  }


  //two-way databinding
  twowayval: Number = 0;
  ngOnInit(): void {
  }

}
