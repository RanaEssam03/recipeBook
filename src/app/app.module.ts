import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesModule } from './recipes/recipes.module';
import { ListComponent } from './recipes/list/list.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingModule
    // NgModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
