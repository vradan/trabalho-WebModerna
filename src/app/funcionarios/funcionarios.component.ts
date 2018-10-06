import { Component } from "@angular/core";
import { IFuncionario } from "../interfaces/interface.funcionario";
import { FuncionariosService } from "../services/funcionarios.service";

@Component({
    moduleId: module.id,
    templateUrl: 'views/funcionarios.component.html'
})

export class FuncionarioComponent {

    public listaFuncionarios: IFuncionario[];
    private funcionariosService: FuncionariosService;

    constructor(funcionariosService: FuncionariosService) {
        this.funcionariosService = funcionariosService;
        this.listaFuncionarios = funcionariosService.getFuncionarios();
    }

    public selecionar(funcionario: IFuncionario): void {
        this.funcionariosService.setFuncionarioCadastro(funcionario);
    }

}