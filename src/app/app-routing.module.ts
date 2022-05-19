import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { Auth2Component } from './auth2/auth2.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { HomeComponent } from './home/home.component';
import { AuthorisedLayoutComponent } from './layout/authorised-layout/authorised-layout.component';
import { GuestLayoutComponent } from './layout/guest-layout/guest-layout.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', component: AuthComponent, pathMatch: 'full' },
      { path: 'register', component: Auth2Component },
    ],
  },
  {
    path: '',
    component: AuthorisedLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'sidebar', component: SidebarComponent },
      { path: 'recipe', component: RecipeComponent },
      { path: 'createrecipe', component: CreateRecipeComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
