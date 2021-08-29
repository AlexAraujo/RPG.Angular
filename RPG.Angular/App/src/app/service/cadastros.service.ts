import { Cadastros } from './../models/Cadastros';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  private listaCadastro: any[];
  private url = 'http://localhost:3000/Cadastros';

  constructor(private httpClient: HttpClient) {
    this.listaCadastro = [];
  }

  get cadastros() {
    return this.listaCadastro;
  }

  todos(): Observable<Cadastros[]> {
    return this.httpClient.get<Cadastros[]>(this.url)
  }

  adcionar(cadastrados: Cadastros): Observable<Cadastros> {
    this.hidratar(cadastrados);
    return this.httpClient.post<Cadastros>(this.url, cadastrados)
  }

  private hidratar(cadastrado: any) {
    cadastrado.data = new Date();
  }
}
