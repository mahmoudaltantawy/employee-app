import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/_models/employee';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Department } from "src/app/core/_models/emp_department";
import { SearchEmployee } from 'src/app/core/_models/searchEmployees';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employeesArr:Employee[];
  searchEmpForm: FormGroup;
  submited: boolean;
  submitted = false;
  departments:Department[] = [
    { name: "HR Department", id: 1 },
    { name: "Developers ", id: 2 },
    { name: "Social Media", id: 3 },
    { name: "Operations", id: 4 },
    { name: "financial ", id: 5 },
  ];
  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    // initialization of search 
    this.searchEmpForm = this.formBuilder.group({
      empName: ["", Validators.required ],
      selectedDepartment: ["", Validators.required],
    });

   this.getEmployees();
  }
  getEmployees(){
     // check if employees in localstorage
     const savedEmployees = JSON.parse(localStorage.getItem('employees'));
     if(savedEmployees){
      this.employeesArr = savedEmployees;
    }else{
       this.employeesArr = [];
     }
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.searchEmpForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.searchEmpForm.invalid) {
      return;
    }
    const searchEmployee:SearchEmployee ={
      name:this.searchEmpForm.value.empName ,
      department:this.searchEmpForm.value.selectedDepartment.name ,
    } 
    this.employeesArr =  this.employeesArr.filter((item)=>{
      return(item.name == searchEmployee.name && item.department == searchEmployee.department)
    })
  }
  onReset() {
    this.submitted = false;
    this.searchEmpForm.reset();
    this.getEmployees();
  }
  SelectAllEmp(e){
    alert(e)
  }
}
