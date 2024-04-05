import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CalendarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Pedro';
  user = undefined;
  data=[1,2,3,4,5,6]
}
