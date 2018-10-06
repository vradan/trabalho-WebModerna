import { Component } from "@angular/core";
import { IFuncionario } from './../interfaces/interface.funcionario';
import { FuncionariosService } from './../services/funcionarios.service';

@Component({
    moduleId: module.id,
    templateUrl: 'views/mongoTeste.component.html'
})

export class MongoTesteComponent { 

 public listaFuncionarios: IFuncionario[];
 public funcionarioSelecionado: IFuncionario;

 public selecionar(item: IFuncionario): void {
     this.funcionarioSelecionado = item;
 }

 constructor(private funcionariosService: FuncionariosService) {
     //this.listaEventos = eventosService.getEventos();
     this.listar();
 }

 public listar(): void {
     console.log('teste');
     this.funcionariosService.getFuncionarioWS()
         .subscribe(res => this.listaFuncionarios = res,
         error => alert(error),
         () => console.log('finalizado'));
 }

}