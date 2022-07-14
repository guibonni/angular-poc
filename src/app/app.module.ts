import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { Route, RouterModule } from '@angular/router';

// Guards
import { AuthenticatedGuard } from './guards/authenticated.guard';

const routes: Array<Route> = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard] },
  { path: 'campaign', component: CampaignComponent, canActivate: [AuthenticatedGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CampaignComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
