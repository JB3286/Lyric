import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer/footer.component';
import { LandingPageComponent } from './components/landingPage/landingPage.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { PoemComponent } from './components/poem/poem/poem.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: LandingPageComponent},
  {path:'poems', component: PoemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
