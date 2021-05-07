import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ActionsModule } from '@shared/actions/actions.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ActionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
