import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/Services/enroll.service';

@Component({
  selector: 'app-angularcom',
  templateUrl: './angularcom.component.html',
  styleUrls: ['./angularcom.component.css']
})
export class AngularcomComponent implements OnInit {

  text: string = "Angular";
  
  constructor() { }

  ngOnInit(): void {
  }

  onEnroll(){
    const enrollService = new EnrollService();

    enrollService.onEnrolledClicked(this.text);
  }
}
