import { Component, Input } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { ITabelNoContent, Label } from './core-table-no-content.label';

@Component({
  selector: 'core-table-no-content',
  templateUrl: './core-table-no-content.component.html',
  styleUrls: ['./core-table-no-content.component.scss'],
})
export class CoreTableNoContentComponent {
  labels = this.labelManagerService.getLabels<ITabelNoContent>(Label);
  @Input({ required: true }) tableData: any;
  @Input({ required: true }) loading: any;
  constructor(private labelManagerService: LabelManagerService) {}
}
