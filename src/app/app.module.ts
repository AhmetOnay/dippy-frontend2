import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { GuestLayoutComponent } from './layout/guest-layout/guest-layout.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { AuthorisedLayoutComponent } from './layout/authorised-layout/authorised-layout.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipeComponent } from './recipe/recipe.component';
import { Auth2Component } from './auth2/auth2.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { UtilityService } from './utility.service';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GuestLayoutComponent,
    AuthorisedLayoutComponent,
    AuthComponent,
    SidebarComponent,
    HomeComponent,
    PageContentComponent,
    CardsComponent,
    RecipeComponent,
    Auth2Component,
    CreateRecipeComponent,
    RegistrationComponent,
    IngredientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
