import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'header-menu',
    templateUrl: 'views/menu.component.html'
})

export class MenuComponent {
    titulo_empresa: string = "Fiap";
    titulo_home: string = "Home";
    titulo_principal: string = "Funcionários";
}