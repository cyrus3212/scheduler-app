import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];
}
