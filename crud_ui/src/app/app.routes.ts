import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeResolver } from './employee-resolver';


export const routes: Routes = [
    {path:'header' , component : HeaderComponent},
    {path:'', component: HomeComponent},
    {path:'employee' , component : EmployeeComponent, resolve : {employee : EmployeeResolver} },
    {path:'coming_soon' , component : ComingSoonComponent},
    {path:'employee-list' , component : EmployeeListComponent}
];
