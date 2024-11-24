import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';
import { MockPlayersDataComponent } from '../mock/mock-players-data/mock-players-data.component';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { CommonModule } from '@angular/common';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MockPlayersDataComponent, AddPlayerComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  toggle = false;
  submitted = false;
  isLoggedIn = false;
  addPlayerData: Player = {
    name: '',
    country: '',
    shirtNumber: 0,
    position: '',
  };
  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }
  onGettingData(newPlayer: Player) {
    console.log(newPlayer);

    this.addPlayerData = newPlayer;
    this.toggle = !this.toggle;
  }
  onToggle() {
    this.toggle = !this.toggle;
  }
}
