import { Component, Input } from '@angular/core';
import { Recette } from '../../models/recettes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipes',
  standalone: true, 
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent  {
 
  @Input() recette!: Recette
  

  constructor(private Router : Router){}

  onContinue(){
    this.Router.navigateByUrl(`/recette/${this.recette.id}`)
  }
}

 