import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';

const routes: Routes = [
 { path:'doctors',component:DoctorListComponent},
 {path:'create-doctor',component:CreateDoctorComponent},
 {path:'search-doctor',component:SearchDoctorComponent},
 {path:'create-patient',component:CreatePatientComponent},
 {path:'search-patient',component:SearchPatientComponent},
{path:'',redirectTo:'doctors',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
