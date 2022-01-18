import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor'
import { ComprehensiveService } from '../comprehensive.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] =[];

  constructor(private comprehensiveService : ComprehensiveService,
    private router : Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
private getDoctors(){
  this.comprehensiveService.getDoctorsList().subscribe(data =>{
    this.doctors=data;
  })
  }
}
