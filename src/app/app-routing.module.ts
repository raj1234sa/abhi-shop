import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/product/add',
    component: AddProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/product/list',
    component: ListProductComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
