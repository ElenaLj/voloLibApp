import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyVoloLibModule } from 'projects/my-volo-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyVoloLibModule.forRoot('Test string!', {
      x: 10,
      y: 25,
      endpointUrl: 'https://localhost......'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
