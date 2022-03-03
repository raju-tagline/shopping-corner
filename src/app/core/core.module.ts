import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from 'src/app/core/back-button/back-button.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [BackButtonComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [BackButtonComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
