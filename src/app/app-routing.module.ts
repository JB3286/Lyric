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
    path: 'poems/all',
    title: 'Auflistung',
    component: ListViewCategoryComponent
  },
  {
    path: 'poems/life',
    title: 'Leben',
    component: PoemComponent,
  },
  {
    path: 'poems/love',
    title: 'Liebe',
    component: PoemComponent,
  },
  {
    path: 'poems/erotics',
    title: 'Erotik',
    component: PoemComponent,
  },
  {
    path: 'poems/philosophics',
    title: 'Philosophisches',
    component: PoemComponent,
  },
  {
    path: 'poems/humans',
    title: 'Menschen',
    component: PoemComponent,
  },
  {
    path: 'poems/death',
    title: 'Tod',
    component: PoemComponent,
  },
  {
    path: 'about',
    title: 'Über mich',
    component: AboutComponent
  },
  {
    path: 'comments',
    title: 'Kommentare',
    component: AboutComponent
  },
  {
    path: 'mail',
    title: 'E-mail',
    component: AboutComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
