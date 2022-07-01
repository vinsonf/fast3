import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPlayers from '../reducers/players.reducer';


console.log('selectors');
const selectPlayersFeatureState = createFeatureSelector<fromPlayers.State>('players');

export const selectPlayers = createSelector(
  selectPlayersFeatureState,
  state => state.players
);
export const selectTurn = createSelector(
  selectPlayersFeatureState,
  state => state.turn
);

export const selectPlayersTurn = createSelector(
  selectPlayers,
  selectTurn,
  (players, turn) => players[turn]
);

export const selectScore = createSelector(
  selectPlayersFeatureState,
  state => state.score
);

export const selectPlayer1Score = createSelector(
  selectScore,
  score => score[0]
);

export const selectPlayer2Score = createSelector(
  selectScore,
  score => score[1]
);
