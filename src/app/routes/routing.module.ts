import { Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { InfoComponent } from '../info-page/info/info.component';
import { LoginSignupComponent } from '../login-page/login-signup/login-signup.component';
import { FavoritesPageComponent } from '../favorites/favorites-page/favorites-page.component';
import { ErrorPageComponent } from '../error-page/error-page/error-page.component';
import { PlayerPageComponent } from '../player-page/player-page/player-page.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'player/:shirtNumber', component: PlayerPageComponent },
  { path: '**', component: ErrorPageComponent },
];
