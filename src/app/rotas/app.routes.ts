import { Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { NotFoundComponent } from "../erro/notFound.component"

export const appRoutes: Routes = [
    { path: "", component: HomeComponent  },
    { path: "home", component: HomeComponent  },
    { path: "**", component: NotFoundComponent  }
]