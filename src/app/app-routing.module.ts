import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer/footer.component';
import { LandingPageComponent } from './components/landingPage/landingPage.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: LandingPageComponent},
  {path:'hello', component: NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
