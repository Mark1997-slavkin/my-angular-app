import { Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { InfoComponent } from '../info-page/info/info.component';
import { LoginSignupComponent } from '../login-page/login-signup/login-signup.component';
import { FavoritesPageComponent } from '../favorites/favorites-page/favorites-page.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'favorites', component: FavoritesPageComponent },
];
