import { Component, effect, signal } from '@angular/core';

function getTime(date:Date) {
  let options:Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
}

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
   timer = signal(getTime(new Date))
   constructor(){
    effect((onCleanup) => {

      const handler = setInterval(() => {
        this.timer.set(getTime(new Date))
      }, 1000);

      onCleanup(() => {
        clearInterval(handler)
      });
    });
   }
}
