import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOwnerComponent } from 'src/app/get-owner/get-owner.component'
import { ListGuardService } from './list-guard.service';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  {path: '', component: GetOwnerComponent},
  {
    path: 'lists',
    component: ListsComponent,
    canActivate: [ListGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
