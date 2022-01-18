import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor'
import { Patient } from '../patient';
import { ComprehensiveService } from '../comprehensive.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
 
  patient: Patient = new Patient();
  constructor(private patientService:PatientService,
    private comprehensiveService : ComprehensiveService,
   private router: Router  ) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data =>{
      console.log(data);
      this.goToPatientList();
    })
  }
  goToPatientList(){
    this.router.navigate(['/patients']);
  }
  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }
  doctors: Doctor[]=[];
  private getDoctors(){
    this.comprehensiveService.getDoctorsName().subscribe(data=>{
      this.doctors=data;
    });
  }
}
