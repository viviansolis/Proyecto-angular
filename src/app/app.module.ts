import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './componetes/alumnos/add-alumno/add-alumno.component';
import { AlumnoService } from './service/alumno.service';
import { ListarAlumnoComponent } from './componetes/alumnos/listar-alumno/listar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    ListarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AlumnoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
