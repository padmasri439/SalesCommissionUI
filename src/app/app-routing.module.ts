import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalesComponent} from "./sales/sales.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'sales' ,component:SalesComponent},
  {path:  '' ,redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' ,component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
