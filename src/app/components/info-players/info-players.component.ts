import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/';
import { selectPlayer1Score, selectPlayer2Score, selectPlayers, selectPlayersTurn, selectTurn } from 'src/app/selectors/player.selectors';

@Component({
  selector: 'app-info-players',
  templateUrl: './info-players.component.html',
  styleUrls: ['./info-players.component.scss']
})
export class InfoPlayersComponent implements OnInit {
  player1Score$ = this.store.select(selectPlayer1Score);
  player2Score$ = this.store.select(selectPlayer2Score)
  playersTurn$ = this.store.select(selectPlayersTurn);
  players$ = this.store.select(selectPlayers);
  turn$ = this.store.select(selectTurn);
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
  }

}
