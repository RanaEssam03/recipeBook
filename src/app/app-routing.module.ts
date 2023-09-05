import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './recipes/list/list.component';
import { ViewComponent } from './recipes/view/view.component';

const routes: Routes = [
  // {
  //   path: 'recipes',
  //   loadChildren: () =>
  //     import('./recipes/recipes-routing.module').then(
  //       (m) => m.RecipesRoutingModule
  //     ),
  // },
 

  {
    path:'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
