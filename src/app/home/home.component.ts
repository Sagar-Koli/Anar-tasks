import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: HttpService) {}
  arrObj: any = [];

  ngOnInit() {
    this.getDetails();
  }
  getDetails() {
    this.service.getData().subscribe((result) => {
      // console.log(result);
      this.arrObj = result;
    });
  }

  onAction(value: any) {
    // console.log(value.completed);
    if (value.completed === false) {
      value.completed = true;
      this.service.updateData(value).subscribe((result) => {
        // console.log('Data updated successfully');
      });
    } else if (value.completed === true) {
      value.completed = false;
      this.service.updateData(value).subscribe(() => {
        // console.log('Data updated successfully');
      });
    }
  }
}
