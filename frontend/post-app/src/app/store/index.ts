import { ActionReducerMap } from '@ngrx/store';
import { postReducer, PostState } from './post.reducer';

export interface AppState {
  posts: PostState;
}

export const reducers: ActionReducerMap<AppState> = {
  posts: postReducer
};
