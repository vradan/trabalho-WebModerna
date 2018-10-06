import { Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { NotFoundComponent } from "../erro/notFound.component"
import { CadastroComponent } from '../cadastro/cadastro.component';
import { FuncionarioComponent } from '../funcionarios/funcionarios.component';

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "funcionarios", component: FuncionarioComponent },
    { path: "cadastro", component: CadastroComponent },
    { path: "**", component: NotFoundComponent }
]