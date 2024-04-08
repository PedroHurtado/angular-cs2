import { Component, HostListener } from '@angular/core';
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
  @HostListener(
    'click', ['$event']
  )
  handlerClick(ev:Event){
    ev.stopPropagation();
    const node = (ev.composedPath() as HTMLElement[]).find(
      n=>n.dataset && 'day' in n.dataset
    )
    if(node){
      const {day} = node.dataset
      console.log(day)
    }

    //console.log(day)
  }
}

