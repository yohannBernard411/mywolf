import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { FormsModule }   from '@angular/forms';
import { VideomessageComponent } from './videomessage/videomessage.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EnigmeuneComponent } from './enigmeune/enigmeune.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { EnigmedeuxComponent } from './enigmedeux/enigmedeux.component';
import { CarteComponent } from './carte/carte.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VideomessageComponent,
    EnigmeuneComponent,
    EnigmedeuxComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
