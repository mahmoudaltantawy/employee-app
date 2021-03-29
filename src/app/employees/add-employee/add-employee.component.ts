import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Employee } from "src/app/core/_models/employee";
import { Department } from "src/app/core/_models/emp_department";
import {TranslateService} from '@ngx-translate/core';
import { NotificationsService } from "src/app/core/_services/notifications.service";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.scss"],
})
export class AddEmployeeComponent implements OnInit {
  addForm: FormGroup;
  submited: boolean;
  addEmpForm: FormGroup;
  submitted = false;
  departments: Department[];
  genderArr: object[] = [
    { gender: "male", key: "m" },
    { gender: "female", key: "f" },
  ];
  selectedgender: object = null;
  employeesArr:Employee[];
  constructor(private formBuilder: FormBuilder , private router:Router , translate: TranslateService , private noti:NotificationsService) {
       translate.setDefaultLang('en');
 
         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
  }

  ngOnInit() {
    this.addEmpForm = this.formBuilder.group({
      empName: ["",Validators.required],
      empCode: ["",[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      date: ["", Validators.required],
      selectedDepartment: ["", Validators.required],
      selectedgender: ["", Validators.required],
    });
    this.departments = [
      { name: "HR Department", id: 1 },
      { name: "Developers ", id: 2 },
      { name: "Social Media", id: 3 },
      { name: "Operations", id: 4 },
      { name: "financial ", id: 5 },
    ];

    //check if Employees in locastorage
    if(localStorage.getItem('employees')){
      this.employeesArr = JSON.parse(localStorage.getItem('employees'));
    }else{
      this.employeesArr = [];
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addEmpForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addEmpForm.invalid) {
      return;
    }

    // display form values on success
    const employee = {
      name :this.addEmpForm.get('empName').value ,
      birthday :this.addEmpForm.get('date').value.toLocaleDateString() ,
      code :+this.addEmpForm.get('empCode').value ,
      department :this.addEmpForm.get('selectedDepartment').value.name ,
      gender :this.addEmpForm.get('selectedgender').value.gender ,
    }

    this.employeesArr.push(employee);
    this.noti.successNotification('Employee Added Successfully')
    this.saveEmployees();
    this.onReset();
    this.router.navigate(['/employees/employees-list'])
  }

  // saving data

  saveEmployees() {
    localStorage.setItem('employees' ,JSON.stringify(this.employeesArr))
  }
  onReset() {
    this.submitted = false;
    this.addEmpForm.reset();
  }
}
