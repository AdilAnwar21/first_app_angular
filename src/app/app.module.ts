import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
//importing a newly created component
import { ServerComponent } from './server/server.component';
import { PageComponent } from './page/page.component';
import { WarningAlert } from './warning/warning.component';
import { SuccessAlert } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    PageComponent,
    WarningAlert,
    SuccessAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
