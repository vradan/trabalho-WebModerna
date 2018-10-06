import { Component } from "@angular/core";
import { IFuncionario } from "../interfaces/interface.funcionario";
import { FuncionariosService } from "../services/funcionarios.service";

@Component({
    template: `
    <div class="container margem">
    <h1>PÁGINA DE CADASTRO</h1>
    </div>
    `
})

export class CadastroComponent {

    public listaFuncionarios: IFuncionario[];

    constructor(funcionariosService: FuncionariosService) {
        this.listaFuncionarios = funcionariosService.getFuncionarios();
    }

}