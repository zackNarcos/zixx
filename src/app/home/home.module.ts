import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {Route, RouterModule} from "@angular/router";
import {UiModule} from "@zixx/fe/ui";
import {ControlsModule} from "@zixx/fe/controls";

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
];

@NgModule({
  declarations: [
      HomeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        UiModule,
        ControlsModule,
    ]
})
export class HomeModule { }
