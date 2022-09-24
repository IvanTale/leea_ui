import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RouterModule } from "@angular/router";
import { routes } from "./recipe.routes";



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
  ],
  imports: [
    CommonModule,
  	RouterModule.forChild(routes),
  ]
})
export class RecipeModule {
	public static routes = routes;
}
