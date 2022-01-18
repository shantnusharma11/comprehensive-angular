import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprehensiveService {
 
  private baseURL= "http://localhost:9919/milestone/getDoctors";
  private nameURL="http://localhost:9919/milestone/getAllNames";
  private addURL= "http://localhost:9919/milestone/addDoctor";

  
  constructor(private httpClient: HttpClient) { }

  getDoctorsList(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }
 getDoctorsName(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.nameURL}`);
}
  createDoctor(doctor: Doctor): Observable<Object>{
    return this.httpClient.post(`${this.addURL}`,doctor);
  }
  
}
