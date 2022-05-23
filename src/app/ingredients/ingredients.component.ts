import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  @Output() ingredientsEvent = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [];
  ingModel!: Ingredient;
  showNew: Boolean = false;
  submitType: string = 'Save';
  selectedRow!: number;
  countries: string[] = ['US', 'UK', 'India', 'UAE'];
  constructor() {}

  ngOnInit() {}

  // This method associate to New Button.
  onNew() {
    // Initiate new ingredient.
    this.ingModel = new Ingredient();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.ingredients.push(this.ingModel);
    } else {
      // Update the existing properties values based on model.
      this.ingredients[this.selectedRow].name = this.ingModel.name;
      this.ingredients[this.selectedRow].quantity = this.ingModel.quantity;
      this.ingredients[this.selectedRow].unit = this.ingModel.unit;
    }
    // Hide ingredients entry section.
    this.showNew = false;
    this.ingredientsEvent.emit(this.ingredients);
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    this.selectedRow = index;
    this.ingModel = new Ingredient();
    this.ingModel = Object.assign({}, this.ingredients[this.selectedRow]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding ingredient entry from the list.
    this.ingredients.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide ingredient entry section.
    this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.
  onChangeCountry(country: string) {
    // Assign corresponding selected country to model.
    //this.ingModel.country = country;
  }
}
