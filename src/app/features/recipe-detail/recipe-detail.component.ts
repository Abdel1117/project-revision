import { Component, OnInit } from '@angular/core';
import { Recette } from '../../models/recettes';
import { RecetteServices } from '../../services/recettes.services';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recette! : Recette;
  id! : number;
  title! : string;
  description! : string;
  author! : string;
  date! : string;
  likes! : number;
  image! : string;


  constructor(private RecetteServices : RecetteServices, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.getRecette()
  }

  private getRecette() {
    const recetteId = this.route.snapshot.params["id"];
    console.log(recetteId);
    this.recette = this.RecetteServices.getRecetteById(recetteId);
  }

}
