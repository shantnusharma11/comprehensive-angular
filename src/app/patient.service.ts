import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL="http://localhost:9919/milestone/addPatient";
private idUrl="http://localhost:9919/milestone/getPatientById";
  constructor(private httpClient: HttpClient) { }

createPatient(patient: Patient): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, patient);
}
getPatientById(patientId:number):Observable<Patient>{
  return this.httpClient.get<Patient>(`${this.idUrl}/${patientId}`);
}

}
