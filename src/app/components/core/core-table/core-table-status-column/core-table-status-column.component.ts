import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-core-table-status-column',
  templateUrl: './core-table-status-column.component.html',
  styleUrls: ['./core-table-status-column.component.scss'],
})
export class CoreTableStatusColumnComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  ngOnInit(): void {
    
  }
}
