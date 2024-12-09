import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { ComponentContainerComponent } from './component-container/component-container.component';
import { LayoutsModule } from './layouts/layouts.module';
import { ComponentItemComponent } from './component-item/component-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    ComponentContainerComponent,
    // ComponentItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
