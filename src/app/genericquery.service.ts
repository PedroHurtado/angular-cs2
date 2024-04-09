import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericqueryService {

  constructor(
    private http:HttpClient
  ) {

  }
  getAll<T>():Promise<T>{
    return lastValueFrom(this.http.get<T>("http://localhost:3000/posts"))
  }
}
