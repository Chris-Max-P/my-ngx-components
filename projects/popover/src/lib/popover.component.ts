import { Component } from '@angular/core';

@Component({
  selector: 'my-popover',
  templateUrl: './popover.component.html',
  styleUrls: [ './popover.component.scss']
})
export class PopoverComponent {
  // @ts-ignore
  @Input() tooltipText: string;
  tooltipVisible = false;

  x = 0;

  y = 0;
  private timeoutId: any;

  toggleTooltip(event: MouseEvent) {
    event.preventDefault();
    this.y = (event.target as HTMLElement).getBoundingClientRect().top + (event.target as HTMLElement).clientHeight || 0;
    this.tooltipVisible = !this.tooltipVisible;
    clearTimeout(this.timeoutId);
    if (this.tooltipVisible) {
      this.hideTooltipAfterDelay();
    }
  }

  private hideTooltipAfterDelay() {
    this.timeoutId = setTimeout(() => {
      this.tooltipVisible = false;
    }, 3000);
  }
}
