import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './header/navbar/navbar.component';
import { MockPlayersDataComponent } from './mock/mock-players-data/mock-players-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FC BARCELONA';
}
