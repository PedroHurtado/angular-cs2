import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { FormComponent } from './controls/form/form.component';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';
import { TrasclusionComponent } from './trasclusion/trasclusion.component';
import { LayooutComponent } from './pages/layoout/layoout.component';
import { DialogComponent } from './dialog/dialog.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    CalendarComponent,
    FormComponent,
    CounterComponent,
    TimerComponent,
    TrasclusionComponent,
    LayooutComponent,
    DialogComponent,
    PostsComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Pedro';
  user = undefined;
  data=[1,2,3,4,5,6]
  dialog = viewChild<DialogComponent>('dialog')

  handlerClick(ev:Event){
    ev.stopPropagation();
    this.dialog()?.open()
  }
}
