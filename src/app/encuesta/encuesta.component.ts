import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { EncuestaService } from '../services/service.index';
import { Encuesta } from '../models/encuesta.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _encuestaService: EncuestaService,
    public router: Router
  ) { }


  ngOnInit() {
      init_plugins();

      this.forma = new FormGroup({
        email: new FormControl( null , [Validators.required, Validators.email] ),
        estiloMusica: new FormControl( 'Seleccione' , Validators.required )} );

      this.forma.setValue({
        email: 'test@test.com',
        estiloMusica: 'Seleccione'
      });

  }


  registrarEncuesta() {

    if ( this.forma.invalid ) {
      return;
    }

    if ( this.forma.value.estiloMusica === "Seleccione" ) {
      swal('Importante', 'Debe seleccionar un estilo de musica', 'warning');
      return;
    }

    let encuesta = new Encuesta(
      this.forma.value.email,
      this.forma.value.estiloMusica
    );

    this._encuestaService.crearEncuesta( encuesta )
              .subscribe( resp =>
              {
                  if (resp.data === 'Registro ingresado exitosamente') {
                    swal('Atención', 'Encuesta Registrada con exito', 'success');
                    this.router.navigate(['/listado'])
                  }else {
                    swal('Ocurrió un error',resp.data, 'error');
                  }
              },
                err => {
                  console.debug(JSON.stringify(err));
                  swal('Ocurrió un error', 'La encuestra no pudo ser registrada', 'error')
                });
  }
}
