import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() childvar = new EventEmitter<string>();

  onSubmit(value: string){

    this.childvar.emit(value);
  }
}
