import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landingPage/landingPage.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { PoemComponent } from './components/poem/poem/poem.component';
import { NavigationItemComponent } from './components/navigation/navigation-item/navigation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    NavigationComponent,
    PoemComponent,
    NavigationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
