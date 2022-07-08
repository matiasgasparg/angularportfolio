import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule, HTTP_INTERCEPTORS}from"@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillcircleComponent } from './components/skillcircle/skillcircle.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BtnAgregarContComponent } from './components/btn-agregar-cont/btn-agregar-cont.component';
import { SkillModalComponent } from './components/skill-modal/skill-modal.component';
import { LowerCasePipe } from '@angular/common';
import { InterceptorService } from './service/api-rest/interceptor.service';
import { BtnEliminarComponent } from './components/btn-eliminar/btn-eliminar.component';
import { BtnEditarComponent } from './components/btn-editar/btn-editar.component';
import { AboutmemodalComponent } from './components/aboutmemodal/aboutmemodal.component';
import { EducacionModalComponent } from './components/educacion-modal/educacion-modal.component';
import { SkillcircleModalComponent } from './components/skillcircle-modal/skillcircle-modal.component';
import { HomeModalComponent } from './components/home-modal/home-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    EducacionComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    ProfileComponent,
    SkillcircleComponent,
    BtnAgregarContComponent,
    SkillModalComponent,
    BtnEliminarComponent,
    BtnEditarComponent,
    AboutmemodalComponent,
    EducacionModalComponent,
    SkillcircleModalComponent,
    HomeModalComponent
    
    
  ],
  imports: [
    
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSliderModule,
    MatSliderModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    BrowserModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#004080",
      innerStrokeColor: "#80ffff",
      animationDuration: 300,
      titleFontSize: "45",
      showSubtitle: false,
      responsive: true
      
    }),
    
    BrowserAnimationsModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [SkillModalComponent]
})
export class AppModule { }
