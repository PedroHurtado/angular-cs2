import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
   count =signal(0)
   handlerClick(ev:Event){
      ev.stopPropagation();
      this.count.update(v=>v+1)
   }
}
