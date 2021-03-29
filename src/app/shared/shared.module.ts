import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import { PositiveNumbersDirective } from "../core/_directives/positive-numbers.directive";
import {TableModule} from 'primeng/table';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';


@NgModule({
  declarations: [PositiveNumbersDirective],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    TableModule,
    TranslateModule,
  ] ,
  exports:[
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    PositiveNumbersDirective,
    TableModule,
    TranslateModule,
  ]
})
export class SharedModule { }
