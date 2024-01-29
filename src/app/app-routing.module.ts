import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LandingPageComponent } from './components/landingPage/landingPage.component';
import { PoemViewComponent } from './components/poem/poem-category-view/poem-view.component';
import { PoemComponent } from './components/poem/poem/poem.component';
import { ListViewCategoryComponent } from './components/directory/list-view/list-view-category.component';



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
    path: 'poems',
    title: 'poems',
    component: ListViewCategoryComponent
  },
  {
    path: 'poems/leben',
    title: 'Leben',
    component: PoemComponent,
  },
  {
    path: 'about',
    title: 'Über mich',
    component: AboutComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
