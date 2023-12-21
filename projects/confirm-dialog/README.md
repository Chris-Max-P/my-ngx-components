# Usage

## confirm-dialog.service.ts

### Functions

**openConfirmDialog(confirmDialogData)**

confirmDialogData:
```typescript
{
  title: string, //title is obligatory 
  text = '';

  confirmText = '';
  confirmAction: Function = () => {};
  confirmActionArgs = [];

  cancelText = '';
  cancelAction: Function = () => {};
  cancelActionArgs = [];

  showCancelButton = true;
}
```
