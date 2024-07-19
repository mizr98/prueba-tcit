import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../services/post.service';
import * as PostActions from './post.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPosts),
      mergeMap(() => this.postService.getPosts()
        .pipe(
          map(posts => PostActions.loadPostsSuccess({ posts })),
          catchError(error => of(PostActions.loadPostsFailure({ error })))
        ))
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.addPost),
      mergeMap(action => this.postService.addPost(action.post)
        .pipe(
          map(post => PostActions.addPostSuccess({ post })),
          catchError(error => of(PostActions.addPostFailure({ error })))
        ))
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      mergeMap(action => this.postService.deletePost(action.postId)
        .pipe(
          map(() => PostActions.deletePostSuccess({ postId: action.postId })),
          catchError(error => of(PostActions.deletePostFailure({ error })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}
}
