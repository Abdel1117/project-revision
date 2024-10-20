import { Component, OnInit } from '@angular/core';
import { RecipesComponent } from '../recipes/recipes.component';
import { Recette } from '../../models/recettes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {

  recetes = Recette[] = []

  ngOnInit(): void {
    this.recetes = [
      new Recette(1, "Pizza","une pizza 4 fromage", "Mahmoud", )
    ]
  }

}
