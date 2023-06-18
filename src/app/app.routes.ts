import { Route } from '@angular/router';
import {LayoutComponent} from "@zixx/fe/ui";


export const appRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
            }
        ],
    },
];
