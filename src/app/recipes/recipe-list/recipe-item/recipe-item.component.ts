import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})  
export class RecipeItemComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Input() recipe: Recipe;

  constructor(private recipeName: RecipeService) { }

  ngOnInit(): void {
  }
  
  onSelected() {
    this.recipeName.recipeSelected.emit(this.recipe);
  }
  
}
