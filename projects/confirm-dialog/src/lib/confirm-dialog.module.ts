import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import {MatDialogActions, MatDialogClose} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    MatDialogActions,
    NgIf,
    MatButtonModule,
    MatDialogClose
  ],
  exports: [
    ConfirmDialogComponent
  ]
})
export class ConfirmDialogModule { }
