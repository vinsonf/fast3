import { createAction, props } from '@ngrx/store';

export const ActionChangeSquare = createAction(
  '[Board] Change Square',
  props<{ square: number, value: string }>()
);

export const ActionWinner = createAction(
  '[Board] Winner',
  props<{ winner: string }>()
);



