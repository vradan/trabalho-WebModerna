import { Injectable } from '@angular/core';
import { IFuncionario } from '../interfaces/interface.funcionario';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class FuncionariosService {

    public constructor(private _http: Http) { }
    private url: string = "http://localhost:5000/funcionarios";

    public getFuncionarioWS(): Observable<IFuncionario[]> {
        return this._http.get(this.url).map(res => res.json());
    }

    public setFuncionarioWS(funcionario: IFuncionario): Observable<IFuncionario> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });
        let json = JSON.stringify(
            {
                nome: funcionario.nome,
                email: funcionario.email,
                idade: funcionario.idade,
                dataContratacao: funcionario.dataContratacao
            });
        return this._http.post(this.url, json, options)
            .map(res => res.json());
    }

    public getFuncionarios(): IFuncionario[] {
        return [
            { nome: 'Funcionario1', email: 'funcionario1@gmail.com', dataContratacao: '01/07/2018', idade: 19 },
            { nome: 'Funcionario2', email: 'funcionario2@gmail.com', dataContratacao: '02/08/2018', idade: 20 },
            { nome: 'Funcionario3', email: 'funcionario3@gmail.com', dataContratacao: '03/09/2018', idade: 21 },
            { nome: 'Funcionario4', email: 'funcionario4@gmail.com', dataContratacao: '40/10/2018', idade: 22 }
        ];
    }
}