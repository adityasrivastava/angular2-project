import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent }   from './app.component';
import { HomeComponent }   from './app.home.component';
import { LoginComponent }   from './app.login.component';
import { SuccessComponent }   from './app.success.component';
import { ErrorComponent }   from './app.error.component';


@NgModule({
  imports:      [ BrowserModule,
  					routing ],
  declarations: [ AppComponent, HomeComponent , LoginComponent, SuccessComponent, ErrorComponent
  				 ],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders
  ]
})
export class AppModule { }
