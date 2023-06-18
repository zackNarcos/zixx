import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZixxButtonComponent } from './zixx-button/zixx-button.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ZixxButtonComponent],
    exports: [
        ZixxButtonComponent
    ]
})
export class ControlsModule {}
