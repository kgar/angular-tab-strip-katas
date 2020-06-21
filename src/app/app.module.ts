import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './thoughtram/tabs/tabs.component';
import { TabComponent } from './thoughtram/tab/tab.component';
import { TabsAltComponent } from './juristr/tabs-alt/tabs-alt.component';
import { TabAltComponent } from './juristr/tab-alt/tab-alt.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    TabsAltComponent,
    TabAltComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
