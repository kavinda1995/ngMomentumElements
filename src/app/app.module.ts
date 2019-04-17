import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {ButtonComponent} from './button/button.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent, ButtonComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const momentemElement = createCustomElement(AppComponent, {injector});
    customElements.define('momentum-element', momentemElement);

    const buttonElement = createCustomElement(ButtonComponent, {injector});
    customElements.define('ust-button', buttonElement);
  }

  ngDoBootstrap() {
  }
}
