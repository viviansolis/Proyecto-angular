import { Component, OnInit } from '@angular/core';
import { Alumno, Escuela } from 'src/app/modelo/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {
  alumno:Alumno;
  escuelas:Escuela[];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumno = this.alumnoService.nuevoAlumno();
    this.escuelas = this.alumnoService.getEscuelas();
  }
  nuevoAlumno(): void{
    alert("Angular....!");
    this.alumnoService.addAlumno(this.alumno);
    this.alumno= this.alumnoService.nuevoAlumno();
  }
}
