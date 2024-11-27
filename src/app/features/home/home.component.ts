import { Component, OnInit } from '@angular/core';
import { Recette } from '../../models/recettes';
import { RecipesComponent } from '../recipes/recipes.component';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { RecetteServices } from '../../services/recettes.services';
@Injectable({
  providedIn : "root"
})
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RecipesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit   {

  constructor(private RecetteServices : RecetteServices){}
  recettes! : Recette[]


  ngOnInit(): void {
    this.recettes = this.RecetteServices.getRecette();
  }
}
