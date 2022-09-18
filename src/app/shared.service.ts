import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:8082/api/v1/car";
  constructor(private http: HttpClient) { }
  getCarList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/getCar2');
  }
  addCar(val: any) {
    return this.http.post(this.APIUrl + '/postcar', val);
  }
}
