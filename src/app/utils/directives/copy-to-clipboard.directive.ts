import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NiraSnackBarService } from 'nira-snack-bar';

@Directive({
  selector: '[copyToClipboard]',
})
export class CopyToClipboardDirective {
  @Input() copyToClipboard: any;

  constructor(
    private niraSnackBar: NiraSnackBarService,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.el.nativeElement.style.cursor = 'pointer';
  }
  @HostListener('click') onMouseUp() {
    navigator.clipboard
      .writeText(this.copyToClipboard)
      .then((e) => {
        this.niraSnackBar.show('با موفقیت ایجاد شد', {
          statusClass: 'success',
          duration: 3000,
        });
      })
      .catch((e) => console.error(e));
  }
}
