import { Component } from "@angular/core";
import { IFuncionario } from "../interfaces/interface.funcionario";
import { FuncionariosService } from "../services/funcionarios.service";

@Component({
    moduleId: module.id,
    templateUrl: 'views/funcionarios.component.html'
})

export class FuncionarioComponent {

    public listaFuncionarios: IFuncionario[];

    constructor(funcionariosService: FuncionariosService) {
        this.listaFuncionarios = funcionariosService.getFuncionarios();
    }

}