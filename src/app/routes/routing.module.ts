import { Routes } from '@angular/router';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { AppComponent } from '../app.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { InfoComponent } from '../info-page/info/info.component';
import { LoginSignupComponent } from '../login-page/login-signup/login-signup.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login-signup', component: LoginSignupComponent },
];
