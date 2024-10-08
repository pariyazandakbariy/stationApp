import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { NiraModalService } from 'nira-modal';
import { CaretUpIconComponent } from 'src/app/svg-icons/caret-up-icon/caret-up-icon.component';
@Directive({
  selector: '[tableDetailViewerManager]',
})
export class TableDetailViewerManagerDirective {
  @Input() detailViewerData: any;

  constructor(
    private el: ElementRef,
    private niraModalService: NiraModalService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    if (this.detailViewerData?.detailViewer?.key) {
      this.changeStyle();
    }
  }

  changeStyle() {
    this.el.nativeElement.style.backgroundColor = '#b4dcff';
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.style.borderRadius = '18px';
    this.el.nativeElement.style.padding = '2px 8px ';
    this.el.nativeElement.classList.add('detailViewer');
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        CaretUpIconComponent
      );
    const componentRef =
      this.viewContainerRef.createComponent(componentFactory);
    const host = this.el.nativeElement;
    host.insertBefore(componentRef.location.nativeElement, host.firstChild);
  }

  @HostListener('click') onMouseUp() {
    if (this.detailViewerData?.detailViewer?.key) {
      this.niraModalService.open(
        this.detailViewerData?.detailViewer?.detailViewerComponent,
        {
          data: this.detailViewerData.data,
        }
      );
    }
  }
}
