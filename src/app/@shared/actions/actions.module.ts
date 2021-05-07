import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions.component';



@NgModule({
  declarations: [
    ActionsComponent
  ],
  exports: [
    ActionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActionsModule { }
