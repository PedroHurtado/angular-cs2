import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {
  constructor(private route:ActivatedRoute){
    console.log(this.route.snapshot.params)
  }
}
