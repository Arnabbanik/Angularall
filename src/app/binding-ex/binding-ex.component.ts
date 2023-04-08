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
  property:boolean = false;
  expression: string = "backgroud-color: yellow";
  fontcolor: string = "red";

  //event binding
  visible: boolean = false;
  onSubmit(){
    this.visible = true;
  }

  //example2
  searchval: string = 'Arnab';
  changesearchval(eventData: any){
    this.searchval = (<HTMLInputElement>eventData.target).value;
  }
  //two-way databinding
  twowayval: string = '';
  ngOnInit(): void {
  }

}
