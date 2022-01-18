import { LocationChangeEvent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {
  patientId:number = 0;
  patient:Patient = new Patient();
  constructor(private patientService : PatientService,
    private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.patientId= this.route.snapshot.params['patientId'];
    this.findPatientById();
  }
public findPatientById(){
  
  this.patientService.getPatientById(this.patientId).subscribe(data =>{
    this.patient=data;
  },error => console.log(error));
}
}
