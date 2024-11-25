import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { players } from '../../mock/mock.data';

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.css',
})
export class PlayerPageComponent {
  players = players;
  player: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const shirtNumber = +this.route.snapshot.paramMap.get('shirtNumber')!;
    this.player = players.find((p) => p.shirtNumber === shirtNumber);
    console.log(this.player);
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
