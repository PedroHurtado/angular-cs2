import { Component } from '@angular/core';
import { DayComponent } from '../day/day.component';

function* getDays(){
  for(let i=0;i<31;i++){
    yield i+1
  }
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  days=[...getDays()]
}
