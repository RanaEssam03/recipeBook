import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";
import { RecipesRoutingModule } from "./recipes-routing.module";


@NgModule({
  declarations:[
    ListComponent,
    AddComponent,
    ViewComponent
  ],
  imports:[
    CommonModule,
    RecipesRoutingModule
  ],
  exports:[
    ListComponent,
    AddComponent,
    ViewComponent
  ]

})


export class RecipesModule{

}
