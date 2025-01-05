import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { EmployeeComponent } from './employee/employee.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, HeaderComponent, HomeComponent, EmployeeComponent, ComingSoonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud_ui';
}
