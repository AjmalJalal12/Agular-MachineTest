import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { AirlineComponent } from './airlines/airline/airline.component';
import { AirlineListComponent } from './airlines/airline-list/airline-list.component';
import { EditairlineComponent } from './airlines/editairline/editairline.component';
import { LoginComponent } from './airlines/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlinesComponent,
    AirlineComponent,
    AirlineListComponent,
    EditairlineComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
