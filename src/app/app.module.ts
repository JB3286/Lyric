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
import { SideNavComponent } from './components/navigation/side-nav/side-nav.component';
import { AboutComponent } from './components/about/about.component';
import { FooterItemComponent } from './components/footer/footer-item/footer-item.component';
import { PoemService } from './services/poem.service';
import { PoemViewComponent } from './components/poem/poem-category-view/poem-view.component';
import { DataInterchangeService } from './services/data-interchange.service';
import { ListViewCategoryComponent } from './components/directory/list-view/list-view-category.component';
import { CreatePoemComponent } from './admin/create-poem/create-poem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    NavigationComponent,
    PoemComponent,
    NavigationItemComponent,
    SideNavComponent,
    AboutComponent,
    FooterItemComponent,
    PoemViewComponent,
    ListViewCategoryComponent,
    CreatePoemComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule

  ],
  providers: [PoemService, DataInterchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
