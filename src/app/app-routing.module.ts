import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { LandingPageComponent } from './components/landingPage/landingPage.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { PoemComponent } from './components/poem/poem/poem.component';
import { SideNavComponent } from './components/poem/side-nav/side-nav.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: LandingPageComponent},
  {path:'poems', component: PoemComponent},
  {path:'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
