import { Injectable } from "@angular/core";
import { IFuncionario } from "../interfaces/interface.funcionario";

@Injectable()
export class FuncionariosService {

    public funcionarioCadastro: IFuncionario;

    public setFuncionarioCadastro(funcionario : IFuncionario) : void {
        this.funcionarioCadastro = funcionario;
    }

    public getFuncionarioCadastro() : IFuncionario {
        return this.funcionarioCadastro;
    }

    public getFuncionarios(): IFuncionario[] {
        return [
            {
                nome: "Lucas de Souza Morinigo", 
                cpf: "444.777.555-99", 
                cargo: "Desenvolvedor",
                telefone: "(11) 99999-9999",
                email: "lucas.morinigo@email.com",
            },
            {
                nome: "Marcos Vinicius", 
                cpf: "555.444.333-22", 
                cargo: "Desenvolvedor",
                telefone: "(11) 99999-9999",
                email: "marcos.vinicius@email.com",
            }
        ];
    }

}