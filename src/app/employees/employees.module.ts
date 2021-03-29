import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';


@NgModule({
  declarations: [AddEmployeeComponent, EmployeesListComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
