import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UIComposerComponent } from './ui-composer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UIComposerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
