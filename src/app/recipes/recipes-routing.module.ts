import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  // {path:'', redirectTo:'recipes', pathMatch:'full'},
  { path: 'list_recipes', component: ListComponent },
  { path: 'add-recipes', component: AddComponent },
  { path: 'view-recipes', component: ViewComponent },
  { path: 'edite-recipe/:id', component: AddComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class RecipesRoutingModule {}
