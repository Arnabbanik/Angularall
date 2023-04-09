import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentone',
  templateUrl: './parentone.component.html',
  styleUrls: ['./parentone.component.css']
})
export class ParentoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = ['item1','item2','item3'];

  addItem(newItem: string){
    this.items.push(newItem);
  }

}
