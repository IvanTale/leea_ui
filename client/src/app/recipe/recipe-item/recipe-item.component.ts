import { Component, OnInit } from '@angular/core';
import {IRecipe, RecipeService} from "../recipe.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})

export class RecipeItemComponent implements OnInit {
	public id = this.route.snapshot.paramMap.get('id');
	public product: IRecipe | undefined;
  constructor(
	  private recipeService: RecipeService,
	  private router: Router,
	  private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
	  this.recipeService.getItem(this.id).subscribe((res) => {
		  console.log(res)
		  this.product = res;
	  });
  }

}
