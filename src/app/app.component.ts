import { Component } from '@angular/core';

import { MenuComponent } from './menu/menu.component'

@Component({
  selector: 'my-app',
  template: `<header-menu></header-menu>`,
})
export class AppComponent  { name = 'Angular'; }
