import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from './rotas/app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './erro/notFound.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { FuncionariosService } from './services/funcionarios.service';
import { FuncionarioComponent } from './funcionarios/funcionarios.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,
    MenuComponent,
    HomeComponent,
    FuncionarioComponent,
    CadastroComponent,
    NotFoundComponent],
  providers: [FuncionariosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
