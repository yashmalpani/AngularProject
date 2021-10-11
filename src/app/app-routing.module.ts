import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogineComponent } from './logine/logine.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LogineComponent },
  { path: 'food', component: FoodComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'food-add', component: AddFoodComponent },
  { path: 'search/:id', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
