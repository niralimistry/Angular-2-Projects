import {Component} from '@angular/core';
import {DataServiceService} from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService],
  // providers: ['./data-service.service.ts']
})

export class AppComponent {
  title = 'Parent Component title';
  name = 'Parent Component name';
  names = [];
  public data = [];
  displayData:any;

  receiveMessage(a) {
    this.name = a;
  }
  constructor(private dataService: DataServiceService) {
    // this.names = this.dataService.data;
    this.dataService.getBooks()
      .subscribe(function (resp) {
        this.data = resp;
       console.log(this.data);
      });
    }


  }

