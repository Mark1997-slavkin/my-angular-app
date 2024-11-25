import { players } from './../mock.data';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Player } from '../../model/player.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mock-players-data',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './mock-players-data.component.html',
  styleUrl: './mock-players-data.component.css',
})
export class MockPlayersDataComponent implements OnChanges {
  isLoggedIn = false;
  playerMock = players;
  @Input() addedPlayer?: Player;
  constructor(private authService: AuthService, private router: Router) {
    localStorage.setItem('players', JSON.stringify(this.playerMock));
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
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
        localStorage.setItem('players', JSON.stringify(this.playerMock));
      }
    }
  }
  onNavigate(shirtNubmer: number) {
    this.router.navigate(['/player', shirtNubmer]);
  }

  onErase(shirtNubmer: number) {
    const deletedPlayerArray = this.playerMock.filter(
      (player) => player.shirtNumber !== shirtNubmer
    );
    this.playerMock = deletedPlayerArray;
    localStorage.setItem('players', JSON.stringify(deletedPlayerArray));
  }
  likedPlayers: { [key: number]: boolean } = {};

  onLike(shirtNumber: number): void {
    this.likedPlayers[shirtNumber] = !this.likedPlayers[shirtNumber];
    localStorage.setItem('likedCards', JSON.stringify(this.likedPlayers));
  }

  isLiked(shirtNumber: number): boolean {
    return this.likedPlayers[shirtNumber] || false;
  }
}
