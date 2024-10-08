import { Component, Input } from '@angular/core';
import { DetailViewers } from 'src/app/utils/types';

@Component({
  selector: 'core-table-detail-viewer-for-report',
  templateUrl: './core-table-detail-viewer-for-report.component.html',
  styleUrls: ['./core-table-detail-viewer-for-report.component.scss'],
})
export class CoreTableDetailViewerForReportComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;

  get detailViewers() {
    return DetailViewers;
  }

  ngOnInit(): void {}
}
