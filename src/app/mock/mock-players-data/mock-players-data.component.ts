import { players } from './../mock.data';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Player } from '../../model/player.model';

@Component({
  selector: 'app-mock-players-data',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './mock-players-data.component.html',
  styleUrl: './mock-players-data.component.css',
})
export class MockPlayersDataComponent implements OnChanges {
  playerMock = players;
  @Input() addedPlayer?: Player;
  constructor() {
    localStorage.setItem('players', JSON.stringify(this.playerMock));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['addedPlayer'] && changes['addedPlayer'].currentValue) {
      const newPlayer = changes['addedPlayer'].currentValue;
      if (
        newPlayer.name &&
        newPlayer.country &&
        newPlayer.position &&
        newPlayer.shirtNumber > 0
      ) {
        this.playerMock.push(newPlayer);
      }
    }
  }

  onErase(shirtNubmer: number) {
    const deletedPlayerArray = this.playerMock.filter(
      (player) => player.shirtNumber !== shirtNubmer
    );
    this.playerMock = deletedPlayerArray;
    localStorage.setItem('players', JSON.stringify(deletedPlayerArray));
  }
}
