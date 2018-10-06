import { Component } from "@angular/core";
import { IFuncionario } from './../interfaces/interface.funcionario';
import { FuncionariosService } from './../services/funcionarios.service';

@Component({
    moduleId: module.id,
    selector: 'header-menu',
    templateUrl: 'views/menu.component.html'
})

export class MenuComponent {
    titulo_empresa: string = "Fiap";
    titulo_home: string = "Home";
    titulo_principal: string = "Funcionários";
}