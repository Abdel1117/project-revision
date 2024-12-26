import { Injectable } from '@angular/core';
import { Recette } from '../models/recettes';

@Injectable({
  providedIn: 'root'
})
export class RecetteServices {
    
    private recettes : Recette[] = [
        new Recette(
            1, "Mon Titre", "lorem ipsum dolor", "Moi", "20/20/2024", 99999, "https://via.placeholder.com/250"
          ),
           new Recette(
            2, "Mon Titre 2", "lorem ipsum dolor 2", "Moi 2", "20/20/2024", 99999, "https://via.placeholder.com/250"
          ),

          new Recette(
            3, "Mon TItre 3" ,"lorem ipsum dolor 3", "Moi 3", "20/20/2024", 99999, "https://via.placeholder.com/250"
          )
    ]


    getRecetteById(recetteId : number) : Recette{
        const foundedRecetteId = this.recettes.find((recette :Recette) => recette.id == recetteId);
        
        if(!foundedRecetteId){
            throw new Error("Aucune recette retrouvé");
        }
        return foundedRecetteId;
    }
    getRecette() : Recette[] {
        return [... this.recettes];
    }


}