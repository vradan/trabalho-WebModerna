import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from './rotas/app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './erro/notFound.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,
    MenuComponent,
    HomeComponent,
    NotFoundComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
