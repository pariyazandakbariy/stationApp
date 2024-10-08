import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-core-table-status-active-column',
  templateUrl: './core-table-status-active-column.component.html',
  styleUrls: ['./core-table-status-active-column.component.scss'],
})
export class CoreTableStatusActiveColumnComponent {
  @Input({ required: true }) data: any;
  @Input({ required: true }) column!: any;
  ngOnInit(): void {
    
  }
}
