import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../enviroments/enviroment';
import { Auth } from '../interfaces/auth.interface';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = enviroment.api;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false)
    }

    return this.http.get<Auth>(`${this.URL}/usuarios/1`)
      .pipe(
        map((auth) => {
          // console.log('map', auth);
          this._auth = auth
          return true
        })
      )
  }


  login() {
    return this.http.get<Auth>(`${this.URL}/usuarios/1`)
      .pipe(
        tap((res) => {
          // console.log('😀 AUTHSERVICE', res); TODO: Me llega el objeto del HttpBackend, usuario, contraseña, email

          this._auth = res
        }),
        tap((res) => {
          localStorage.setItem('token', this.auth.id)
        })
      )
  }

  logout() {
    this._auth = undefined
  }
}
