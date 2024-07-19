import { Component } from '@angular/core';
import { Post } from '../models/post.model';
import { Store } from '@ngrx/store';
import * as PostActions from '../store/post.actions';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  nombre: string = '';
  descripcion: string = '';

  constructor(private store: Store) {}

  addPost() {
    const post: Post = {
      id: 0,
      nombre: this.nombre,
      descripcion: this.descripcion
    };
    this.store.dispatch(PostActions.addPost({ post }));
    this.nombre = '';
    this.descripcion = '';
  }
}
