import { ActionReducerMap } from '@ngrx/store';
import * as bananaStore from './banana/state';

export interface AppState {
  banana: bananaStore.State;
}

export const initialState: AppState = {
  banana: bananaStore.initialState
}

export const reducers: ActionReducerMap<AppState> = {
  banana: bananaStore.reducer
}

export const getMyBanana = (s: AppState) => s.banana;
