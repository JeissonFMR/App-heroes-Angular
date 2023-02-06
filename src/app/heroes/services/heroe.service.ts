import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeInterface } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<HeroeInterface[]>('http://localhost:3000/heroes')
  }
}
