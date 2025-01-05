import { Routes } from '@angular/router';
import path from 'path';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

export const routes: Routes = [
    {path:'header' , component : HeaderComponent},
    {path:'', component: HomeComponent},
    {path:'employee' , component : EmployeeComponent},
    {path:'coming_soon' , component : ComingSoonComponent}
];
