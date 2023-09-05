import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    ReactiveFormsModule,
    FormsModule
    // BrowserModule
  ],
  exports: [ListComponent, AddComponent, ViewComponent],
})
export class RecipesModule {}
