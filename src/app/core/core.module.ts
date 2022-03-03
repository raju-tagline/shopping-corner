import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from 'src/app/core/back-button/back-button.component';


@NgModule({
  declarations: [
    BackButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackButtonComponent
  ]
})
export class CoreModule { }
