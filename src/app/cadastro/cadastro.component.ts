import { Component } from "@angular/core";
import { IFuncionario } from "../interfaces/interface.funcionario";
import { FuncionariosService } from "../services/funcionarios.service";

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
})

export class CadastroComponent {

    public funcionario: IFuncionario;

    constructor(private funcionariosService: FuncionariosService) {
        this.funcionario = funcionariosService.getFuncionarioCadastro();
        if (this.funcionario == undefined) {
            this.funcionario = {
                _id: null,
                nome: "",
                cpf: "",
                cargo: "",
                telefone: 0,
                email: ""
            }
        }
    }

    public incluir(funcionario: IFuncionario) {
        this.funcionariosService.setFuncionarioWS(funcionario)
            .subscribe(res => JSON.stringify(res),
                error => alert(error),
                () => console.log("Cadastrado com sucesso!"));
    }

}