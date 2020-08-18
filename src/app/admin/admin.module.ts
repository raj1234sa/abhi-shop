import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TemplateComponent } from '../template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';


@NgModule({
  declarations: [DashboardComponent, AddProductComponent, ListProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TemplateComponent
  ]
})
export class AdminModule { }
