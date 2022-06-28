import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBoard from '../reducers/board.reducer';

const selectBoardFeatureState = createFeatureSelector<fromBoard.State>('board');

export const selectSquares = createSelector(
  selectBoardFeatureState,
  state => state.squares
);
