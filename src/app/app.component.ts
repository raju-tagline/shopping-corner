import { DatabaseService } from 'src/app/services/database.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shopping-corner-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-corner';
  constructor(private databaseService: DatabaseService) {

    //admin
    this.databaseService.getUserLogin().subscribe((res) => {
      console.log('res :>> ', res);
    })

    //user
    this.databaseService.get().subscribe((res) => {
      console.log('res :>> ', res);
    })
  }
}
