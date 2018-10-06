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
                cpf: funcionario.cpf,
                cargo: funcionario.cargo,
                telefone: funcionario.telefone,
                email: funcionario.email,
            });
        return this._http.post(this.url, json, options)
            .map(res => res.json());
    }

    public funcionarioCadastro: IFuncionario;

    public setFuncionarioCadastro(funcionario : IFuncionario) : void {
        this.funcionarioCadastro = funcionario;
    }

    public getFuncionarioCadastro() : IFuncionario {
        return this.funcionarioCadastro;
    }

}