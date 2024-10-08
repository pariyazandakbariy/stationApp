import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-core-row-pelak',
  templateUrl: './core-row-pelak.component.html',
  styleUrls: ['./core-row-pelak.component.scss'],
})
export class CoreRowPelakComponent {
  @Input({ required: true }) data!: any;
  @Input({ required: true }) column!: any;
  ngOnInit(): void {}
}
