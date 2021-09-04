import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  private API = 'https://www.fruityvice.com/api/fruit/all'
  constructor(private http: HttpClient) { }

  getFruits(){
    return this.http.get(this.API)
  }
}
