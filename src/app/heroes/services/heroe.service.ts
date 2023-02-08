import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeInterface } from '../interfaces/heroes.interfaces';
import { enviroment } from '../../../enviroments/enviroment';
import { Observable } from 'rxjs';

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

  agregarHeroe(heroe: HeroeInterface) {
    return this.http.post<HeroeInterface>(`${this.baseURL}/heroes`, heroe)
  }

  actualizarHeroe(heroe: HeroeInterface) {
    return this.http.put<HeroeInterface>(`${this.baseURL}/heroes/${heroe.id}`, heroe)
  }

  borrarHeroe(id: string) {
    return this.http.delete<any>(`${this.baseURL}/heroes/${id}`)
  }
}
