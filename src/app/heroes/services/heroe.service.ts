import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeInterface } from '../interfaces/heroes.interfaces';
import { enviroment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private baseURL: string = enviroment.api

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<HeroeInterface[]>(`${this.baseURL}/heroes`)
  }
  getHeroePorId(id: string) {
    return this.http.get<HeroeInterface>(`${this.baseURL}/heroes/${id}`)
  }

  getSugerencias(termino: string) {
    return this.http.get<HeroeInterface[]>(`${this.baseURL}/heroes/?q=${termino}&_limit=6`)

  }
}
