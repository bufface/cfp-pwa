import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { TruncatePipe } from './pipes/truncate.pipe';

import { LogrosService } from './services/logros.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogroComponent } from './logro/logro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe,
    LogroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [LogrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
