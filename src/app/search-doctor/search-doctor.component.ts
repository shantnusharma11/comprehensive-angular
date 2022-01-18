import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComprehensiveService } from '../comprehensive.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
id: number=0;
 doctors: Doctor[]=[];
 selectedDoctor ? : Doctor;
  constructor(private comprehensiveService: ComprehensiveService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
onSelect(doctor: Doctor): void{
  this.selectedDoctor=doctor;
}
private getDoctors(){
  this.comprehensiveService.getDoctorsList().subscribe(data =>{
    this.doctors=data;
  });
}
}
