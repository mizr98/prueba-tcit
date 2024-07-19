import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import * as PostActions from '../store/post.actions';
import { PostState } from '../store/post.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts$: Observable<Post[]>;

  constructor(private store: Store<{ posts: PostState }>) {
    this.posts$ = this.store.select(state => state.posts.posts);
  }

  ngOnInit() {
    this.store.dispatch(PostActions.loadPosts());
  }

  deletePost(id: number) {
    this.store.dispatch(PostActions.deletePost({ postId: id }));
  }
}
