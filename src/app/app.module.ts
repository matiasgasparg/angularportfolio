import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule}from"@angular/common/http";

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavMenuSocialmediaComponent } from './components/nav-menu-socialmedia/nav-menu-socialmedia.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { EducacionComponent } from './components/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavMenuSocialmediaComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    EducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
