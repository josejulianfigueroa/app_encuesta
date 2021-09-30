
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';

import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        PagesComponent,
        ListadoComponent,
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
    ]
})
export class PagesModule { }
