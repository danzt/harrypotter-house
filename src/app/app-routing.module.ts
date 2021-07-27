import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoIngresoComponent } from './componentes/nuevo-ingreso/nuevo-ingreso.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [
  {path: '', component: PersonajesComponent},
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'nuevo-ingreso', component: NuevoIngresoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
