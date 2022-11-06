import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutMeComponent } from './components/about-me/edit-about-me/edit-about-me.component';
import { EditEducacionComponent } from './components/education/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/education/new-educacion/new-educacion.component';
import { EditarExperienciaLaboralComponent } from './components/experience/editar-experiencia-laboral/editar-experiencia-laboral.component';
import { NewExperienciaLaboralComponent } from './components/experience/new-experiencia-laboral/new-experiencia-laboral.component';
import { HomeComponent } from './components/home/home.component';
import { EditIdiomaComponent } from './components/language/edit-idioma/edit-idioma.component';
import { NewIdiomaComponent } from './components/language/new-idioma/new-idioma.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { EditarproyectoComponent } from './components/projects/editarproyecto/editarproyecto.component';
import { NewProyectComponent } from './components/projects/new-proyect/new-proyect.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginButtonComponent},
  {path:'nueva-experiencia-laboral', component: NewExperienciaLaboralComponent},
  {path:'editar-experiencia-laboral/:id', component: EditarExperienciaLaboralComponent},
  {path:'nueva-educacion', component: NewEducacionComponent},
  {path:'editar-educacion/:id', component: EditEducacionComponent},
  {path:'nuevo-proyecto', component: NewProyectComponent},
  {path:'editar-proyecto/:id', component: EditarproyectoComponent},
  {path:'nuevo-idioma', component: NewIdiomaComponent},
  {path:'editar-idioma/:id', component: EditIdiomaComponent},
  {path:'editar-persona/:id', component: EditAboutMeComponent},
  {path:'nueva-skills', component: NewSkillComponent},
  {path:'editar-skills/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }