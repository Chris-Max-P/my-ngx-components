export class ConfirmDialogData {
  text = '';

  confirmText = '';
  confirmAction: Function = () => {};
  confirmActionArgs = [];

  cancelText = '';
  cancelAction: Function = () => {};
  cancelActionArgs = [];

  showCancelButton = true;

  constructor(public title: string) {
  }
}
