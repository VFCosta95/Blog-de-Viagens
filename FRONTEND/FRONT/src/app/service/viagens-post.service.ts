import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViagensPostService {

  constructor(private http: HttpClient) { }


  private url = 'http://127.0.0.1:8000/all';

  consumirDados(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
}

  buscarDados(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }// Buscar dados relacionados ao ID
  
}
