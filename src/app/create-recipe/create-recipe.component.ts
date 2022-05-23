import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  ingredients: Ingredient[] = [];
  ingredientsEventHander($event: any) {
    this.ingredients = $event;
    console.log(this.ingredients);
  }
  constructor(private formBuilder: FormBuilder) {}

  createRecipeForm = this.formBuilder.group({
    name: '',
    description: '',
  });

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Create Recipe Submitted', this.createRecipeForm.value);
    this.createRecipeForm.reset();
  }
}
