import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  constructor(private http: HttpClient) {
    //this.recipe = {} as Recipe;
    this.recipe = new Recipe(
      1,
      'Burger',
      'Best burger ever',
      20,
      '1Step:Cook',
      2,
      1,
      1,
      true
    );
  }
  ngOnInit(): void {}

  getRecipe(id: number) {
    this.http.get('/recipe/' + id).subscribe((response) => {});
  }
}
