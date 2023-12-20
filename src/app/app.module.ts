import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavComponent} from "./components/shared/nav/nav.component";
import { ContentSliderComponent } from './components/content-slider/content-slider.component';
import { ContentComponent } from './components/content/content.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { OpenNavComponent } from './components/shared/nav/open-nav/open-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentSliderComponent,
    ContentComponent,
    ButtonComponent,
    OpenNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
