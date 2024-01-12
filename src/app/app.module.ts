import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SampleDirective } from './CustomDirective/sample.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { DynamicBindingComponent } from './dynamic-binding/dynamic-binding.component';
import { ConditionalAttributeDirectiveComponent } from './conditional-attribute-directive/conditional-attribute-directive.component';
import { DisableDirective } from './CustomDirective/disable.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SampleDirective,
    HighlightDirective,
    DynamicBindingComponent,
    ConditionalAttributeDirectiveComponent,
    DisableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
