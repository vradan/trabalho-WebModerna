import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './rotas/app.routes';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './erro/notFound.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MongoTesteComponent } from './mongoTeste/mongoTeste.component';
import { FuncionariosService } from './services/funcionarios.service';
import { FuncionarioComponent } from './funcionarios/funcionarios.component';

@NgModule({

  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule],
  declarations: [AppComponent,
    MenuComponent,
    HomeComponent,
    FuncionarioComponent,
    CadastroComponent,
    MongoTesteComponent,
    NotFoundComponent],

  providers: [FuncionariosService],

  bootstrap: [AppComponent]
})

export class AppModule { }
