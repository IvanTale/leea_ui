import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface IRecipe {
	id: number;
	name: string;
	price: number;
	netCost: number;
	createdAt: string;
	updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

	public constructor(
		private http: HttpClient,
	) {}

	public getRecipe() {
		return this.http.get<IRecipe[]>('api/products');
	}
}
