import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "./confirm-dialog.component";
import {ConfirmDialogData} from "./confirm-dialog-data.model";

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  defaultDialogConfig: ConfirmDialogData = {
    title: 'Proceed?',
    text: '',

    confirmText: 'Ok',
    confirmAction: () => {},
    confirmActionArgs: [],

    cancelText: 'Cancel',
    cancelAction: () => {},
    cancelActionArgs: [],

    showCancelButton: true,
  }

  constructor(private dialog: MatDialog) {
  }

  openConfirmDialog(confirmDialogData: ConfirmDialogData = this.defaultDialogConfig): void {
    this.dialog.open(ConfirmDialogComponent, {
      data: confirmDialogData,
      panelClass: ''
    });
  }
}
