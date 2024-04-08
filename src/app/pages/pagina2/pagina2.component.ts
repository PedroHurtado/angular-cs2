import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component {
  constructor(private route:ActivatedRoute){
    console.log(this.route.snapshot.queryParams)
  }
}
