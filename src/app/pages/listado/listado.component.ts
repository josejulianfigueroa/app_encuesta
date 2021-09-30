import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../../models/encuesta.model';
import { EncuestaService } from '../../services/service.index';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

 public encuestas: Encuesta[] = [];
 public cantEncuestas = 0;

  constructor(
    public _encuestaService: EncuestaService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getEncuestas();

  }

  getEncuestas() {
    this._encuestaService.getEncuestas()
            .subscribe( encuestas => {this.encuestas = encuestas;
                                           this.cantEncuestas= encuestas.length
                                          },
                      err => {
                                    console.debug(JSON.stringify(err));
                                    swal('Ocurrió un error, al obtener el listado de encuestas', 'error')
                                  });
  }

  goRegistrarEncuesta(){
    this.router.navigate(['/encuesta']);
  }

}
