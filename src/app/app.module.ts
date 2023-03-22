import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HambMenuModule } from 'src/ui/hamb-menu/hamb-menu.module';
import { PopUpsModule } from 'src/ui/pop-ups/pop-ups.module';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent],
  imports: [BrowserModule, HambMenuModule, PopUpsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
