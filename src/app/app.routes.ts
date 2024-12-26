import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { RecipeDetailComponent } from './features/recipe-detail/recipe-detail.component';

export const routes: Routes = [
    {path: "", component : HomeComponent},
    {path : "login", component: LoginPageComponent},
    {path : "recette/:id", component: RecipeDetailComponent}
];
