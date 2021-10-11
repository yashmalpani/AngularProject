import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogineComponent } from './logine/logine.component';
import { FoodComponent } from './food/food.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    RegisterComponent,
    HomepageComponent,
    LogineComponent,
    FoodComponent,
    AdminPanelComponent,
    AddFoodComponent,
    SearchComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent, AppComponent]
})
export class AppModule { }
