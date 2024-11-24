import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css',
})
export class AddPlayerComponent {
  @Output() playerData = new EventEmitter<{
    name: string;
    country: string;
    shirtNumber: number;
    position: string;
  }>();

  name = '';
  country = '';
  shirtNumber = 0;
  position = '';

  onAddPlayer() {
    this.playerData.emit({
      name: this.name,
      country: this.country,
      shirtNumber: this.shirtNumber,
      position: this.position,
    });
  }
}
