import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from 'src/app/core/back-button/back-button.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    BackButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackButtonComponent
  ]
})
export class CoreModule { }
