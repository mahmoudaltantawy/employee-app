import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './core/_components/dashboard/dashboard.component';
import { NotFoundComponent } from './core/_components/not-found/not-found.component';


const routes: Routes = [
  {path:'' , component:DashboardComponent},
  {

        path: "employees",
        loadChildren: () =>
          import("./employees/employees.module").then((m) => m.EmployeesModule),
      
  },
  {
    
    path: "notFound", component: NotFoundComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
