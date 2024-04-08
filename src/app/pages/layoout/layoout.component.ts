import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layoout',
  standalone: true,
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './layoout.component.html',
  styleUrl: './layoout.component.css'
})
export class LayooutComponent {

}
