import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LanguageComponent } from './components/language/language.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewExperienciaLaboralComponent } from './components/experience/new-experiencia-laboral/new-experiencia-laboral.component';
import { EditarExperienciaLaboralComponent } from './components/experience/editar-experiencia-laboral/editar-experiencia-laboral.component';
import { NewEducacionComponent } from './components/education/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/education/edit-educacion/edit-educacion.component';
import { NewProyectComponent } from './components/projects/new-proyect/new-proyect.component';
import { EditarproyectoComponent } from './components/projects/editarproyecto/editarproyecto.component';
import { NewIdiomaComponent } from './components/language/new-idioma/new-idioma.component';
import { EditIdiomaComponent } from './components/language/edit-idioma/edit-idioma.component';
import { EditAboutMeComponent } from './components/about-me/edit-about-me/edit-about-me.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SocialNetworksComponent,
    LoginButtonComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    LanguageComponent,
    ProjectsComponent,
    HomeComponent,
    NewExperienciaLaboralComponent,
    EditarExperienciaLaboralComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewProyectComponent,
    EditarproyectoComponent,
    NewIdiomaComponent,
    EditIdiomaComponent,
    EditAboutMeComponent,
    EditSkillComponent,
    NewSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    interceptorProvider,
    Storage
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }