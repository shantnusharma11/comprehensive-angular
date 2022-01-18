import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { ComprehensiveService } from '../comprehensive.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor= new Doctor();
  constructor(private comprehensiveService: ComprehensiveService,
    private router: Router) { }

  ngOnInit(): void {
  }
saveDoctor(){
  this.comprehensiveService.createDoctor(this.doctor).subscribe(data =>{
    console.log(data);
    this.gotoDoctorList();
  },
  error => console.log(error));
}
gotoDoctorList(){
  this.router.navigate(['/doctors']);
}
onSubmit(){
  console.log(this.doctor);
  this.saveDoctor();
}
}
