import { Component, OnInit } from '@angular/core';
import {IRecipe, RecipeService} from "../recipe.service";
import {Observable} from "rxjs";

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	public recipes: IRecipe[] | undefined;
  constructor( public recipeService: RecipeService) { }

  ngOnInit(): void {
	  this.recipeService.getRecipe().subscribe((res) => {
		  this.recipes = res;
	  console.log('recipes', this.recipes);
	  });
  }

}
