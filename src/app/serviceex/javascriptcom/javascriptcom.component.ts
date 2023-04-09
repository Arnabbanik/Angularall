import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/Services/enroll.service';

@Component({
  selector: 'app-javascriptcom',
  templateUrl: './javascriptcom.component.html',
  styleUrls: ['./javascriptcom.component.css']
})
export class JavascriptcomComponent implements OnInit {

  text: string = "avascript";

  constructor() { }

  ngOnInit(): void {
  }

  onEnroll(){
    const enrollService = new EnrollService();
    enrollService.onEnrolledClicked(this.text);
  }
}
