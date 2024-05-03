import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPayload } from '../interfaces/DataPayload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  private REST_API_HOST = "http://15.228.166.200"
  private REST_API_ROUTE_CONSULT = "/consultarCliente"

  constructor(private httpClient: HttpClient) { }

  public validateInformation(cliente: DataPayload): Observable<any> {
    return this.httpClient.post(this.REST_API_HOST + this.REST_API_ROUTE_CONSULT, cliente);
  }
}
