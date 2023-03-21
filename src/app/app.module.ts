import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HambMenuModule } from 'src/ui/hamb-menu/hamb-menu.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HambMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
