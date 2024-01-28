import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landingPage/landingPage.component';
import { PoemViewComponent } from './components/poem/poem-category-view/poem-view.component';
import { PoemComponent } from './components/poem/poem/poem.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    title: 'Home',
    component: LandingPageComponent
  },
  {
    path: 'poems/leben',
    title: 'Leben',
    component: PoemComponent,
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
