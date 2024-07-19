import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post.model';

export const loadPosts = createAction('[Post] Load Posts');
export const loadPostsSuccess = createAction('[Post] Load Posts Success', props<{ posts: Post[] }>());
export const loadPostsFailure = createAction('[Post] Load Posts Failure', props<{ error: any }>());

export const addPost = createAction('[Post] Add Post', props<{ post: Post }>());
export const addPostSuccess = createAction('[Post] Add Post Success', props<{ post: Post }>());
export const addPostFailure = createAction('[Post] Add Post Failure', props<{ error: any }>());

export const deletePost = createAction('[Post] Delete Post', props<{ postId: number }>());
export const deletePostSuccess = createAction('[Post] Delete Post Success', props<{ postId: number }>());
export const deletePostFailure = createAction('[Post] Delete Post Failure', props<{ error: any }>());
