import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ConfirmDialogData} from "./confirm-dialog-data.model";

@Component({
  selector: 'my-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  data: ConfirmDialogData;

  constructor(@Inject(MAT_DIALOG_DATA) data: ConfirmDialogData) {
    this.data = data;
  }

  onConfirm() {
    if (this.data.confirmAction) this.data.confirmAction(...this.data.confirmActionArgs);
  }

  onCancel() {
    if(this.data.cancelAction) this.data.cancelAction(...this.data.cancelActionArgs);
  }

}
