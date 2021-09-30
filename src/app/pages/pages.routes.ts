import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ListadoComponent } from './listado/listado.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'listado', component: ListadoComponent, data: { titulo: 'Listado de Encuestas' } },
            { path: '', redirectTo: '/encuesta', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
