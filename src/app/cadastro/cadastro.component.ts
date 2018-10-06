import { Component } from "@angular/core";
import { IFuncionario } from "../interfaces/interface.funcionario";
import { FuncionariosService } from "../services/funcionarios.service";

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
})

export class CadastroComponent {

    public funcionario: IFuncionario;

    constructor(funcionariosService: FuncionariosService) {
        this.funcionario = funcionariosService.getFuncionarioCadastro();
        console.log(this.funcionario);
    }

 }