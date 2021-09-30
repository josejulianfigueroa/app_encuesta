import { Injectable } from '@angular/core';
import { Encuesta } from '../../models/encuesta.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class EncuestaService {

  constructor(
    public http: HttpClient,
    public router: Router,
  ) {
  }

  crearEncuesta( encuesta: Encuesta ) {

    let url = URL_SERVICIOS + '/api/process_requests/v1/save/';

    return this.http.post( url, encuesta ).pipe(
              map( (resp: any) => {
                return resp;
              }))
  }

  getEncuestas() {

    let url = URL_SERVICIOS + '/api/process_requests/v1/list/'
    return this.http.get( url )
      .pipe(map(  (resp: any) => {
        return resp.data;
      }));

  }

}
