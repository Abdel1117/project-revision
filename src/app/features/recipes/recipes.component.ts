import { Component, Input } from '@angular/core';
import { Recette } from '../../models/recettes';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent  {

  
  Input():  recipes! : Recette 
}
