import { Component, signal } from '@angular/core';
import { Post } from '../post';
import { GenericqueryService } from '../genericquery.service';
import { ISpinner, spinner } from '../decorator/spinner';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements ISpinner {
  posts=signal<Post[]>([])
  active = signal(false)
  constructor(private service:GenericqueryService){
    this.getAll();
  }
  @spinner()
  async getAll(){
    this.posts.set(await this.service.getAll());
  }
  error(){

  }
}
