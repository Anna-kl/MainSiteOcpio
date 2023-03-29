import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HambMenuModule } from 'src/ui/hamb-menu/hamb-menu.module';
import { PopUpsModule } from 'src/ui/pop-ups/pop-ups.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CountryselectModule } from 'src/ui/countryselect/countryselect.module';
import { PhoneInputModule } from 'src/ui/phone-input/phone-input.module';
import { AutoTabDirective } from '../directives/auto-tab/auto-tab.directive';

@NgModule({
  declarations: [AppComponent, RegistrationComponent, AutoTabDirective],
  imports: [
    BrowserModule,
    HambMenuModule,
    PopUpsModule,
    ReactiveFormsModule,
    CountryselectModule,
    HttpClientModule,
    PhoneInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
