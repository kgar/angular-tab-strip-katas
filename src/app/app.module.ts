import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './thoughtram/tabs/tabs.component';
import { TabComponent } from './thoughtram/tab/tab.component';
import { TabsAltComponent } from './juristr/tabs-alt/tabs-alt.component';
import { TabAltComponent } from './juristr/tab-alt/tab-alt.component';
import { CustomStepperComponent } from './steppers/custom-stepper/custom-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    TabsAltComponent,
    TabAltComponent,
    CustomStepperComponent
  ],
  imports: [
    BrowserModule,
    CdkStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
