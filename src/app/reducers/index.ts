import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBoard from './board.reducer';
import * as fromPlayers from './players.reducer';



export interface State {

  [fromBoard.boardFeatureKey]: fromBoard.State;
  [fromPlayers.playersFeatureKey]: fromPlayers.State;

}

export const reducers: ActionReducerMap<State> = {

  [fromBoard.boardFeatureKey]: fromBoard.reducer,
  [fromPlayers.playersFeatureKey]: fromPlayers.reducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
