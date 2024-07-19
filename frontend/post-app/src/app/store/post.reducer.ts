import { createReducer, on } from '@ngrx/store';
import { Post } from '../models/post.model';
import * as PostActions from './post.actions';

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: []
};

const _postReducer = createReducer(
  initialState,
  on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: [...posts]
  })),
  on(PostActions.addPostSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post]
  })),
  on(PostActions.deletePostSuccess, (state, { postId }) => ({
    ...state,
    posts: state.posts.filter(post => post.id !== postId)
  }))
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
