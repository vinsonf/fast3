import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { ActionChangeSquare, ActionWinner } from 'src/app/actions/board.actions';
import { ActionNextTurn } from 'src/app/actions/player.actions';
import { State } from 'src/app/reducers';
import { selectSquares } from 'src/app/selectors/board.selectors';
import { selectPlayersTurn, selectTurn } from 'src/app/selectors/player.selectors';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {


  turn$ = this.store.select(selectTurn);
  squares$ = this.store.select(selectSquares);
  playersTurn$ = this.store.select(selectPlayersTurn);
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.squares$.subscribe(squares => {
      console.log(squares);
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (const winCondition of winConditions) {
        const [a, b, c] = winCondition;

        if ( squares[a] !== '-' && squares[a] === squares[b] && squares[a] === squares[c]) {
         this.store.dispatch(ActionWinner({ winner: squares[a] }));
        }
      }
    })
  }
  nextTurn(square: number, playersTurn: string) {
    this.store.dispatch(ActionChangeSquare({ square, value: playersTurn }));
    this.store.dispatch(ActionNextTurn());
  }

  getSqaureClass(square: string){
    return {
      'square-filled': square !== '-',
      'square-empty': square === '-',
      'x': square === 'X',
      'o': square === 'O'
    }
  }

}
