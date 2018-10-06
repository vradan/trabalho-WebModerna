import { Component } from "@angular/core";
import { IFuncionario } from "../interfaces/interface.funcionario";
import { FuncionariosService } from "../services/funcionarios.service";

@Component({
    moduleId: module.id,
    templateUrl: 'views/funcionarios.component.html'
})

export class FuncionarioComponent {

    public listaFuncionarios: IFuncionario[];

    constructor(private funcionariosService: FuncionariosService) {
        this.listar();
    }

    public listar(): void {
        this.funcionariosService.getFuncionarioWS()
            .subscribe(res => this.listaFuncionarios = res,
                error => alert(error),
                () => console.log('finalizado'));
    }

    public selecionar(funcionario: IFuncionario): void {
        this.funcionariosService.setFuncionarioCadastro(funcionario);
    }

    public remover(funcionario: IFuncionario): void {
        console.log(this.funcionariosService.removeFuncionarioWS(funcionario));
    }

}