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
                _id: funcionario._id,
                nome: funcionario.nome,
                cpf: funcionario.cpf,
                cargo: funcionario.cargo,
                telefone: funcionario.telefone,
                email: funcionario.email,
            });
        let result;

        if (funcionario._id == null) {
            result = this._http.put(this.url + "/" + funcionario._id, json, options)
                .map(res => res.json());
        } else {
            result = this._http.post(this.url, json, options)
                .map(res => res.json());
        }


        return result;
    }

    public removeFuncionarioWS(funcionario: IFuncionario): Observable<IFuncionario> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });

        return this._http.delete(this.url + "/" + funcionario._id, options)
            .map(res => res.json());
    }

    public funcionarioCadastro: IFuncionario;

    public setFuncionarioCadastro(funcionario: IFuncionario): void {
        this.funcionarioCadastro = funcionario;
    }

    public getFuncionarioCadastro(): IFuncionario {
        return this.funcionarioCadastro;
    }

}