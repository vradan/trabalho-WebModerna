import { Injectable } from "@angular/core";
import { IFuncionario } from "../interfaces/interface.funcionario";

@Injectable()
export class FuncionariosService {

    public getFuncionarios(): IFuncionario[] {
        return [
            { nome: "Lucas de Souza Morinigo", dataContratacao: "03/10/2017", cargo: "Desenvolvedor" },
            { nome: "Munir Abdu", dataContratacao: "02/02/2014", cargo: "Designer" }
        ];
    }

}