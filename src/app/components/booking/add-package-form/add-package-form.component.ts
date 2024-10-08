import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-package-form',
  templateUrl: './add-package-form.component.html',
  styleUrls: ['./add-package-form.component.scss'],
})
export class AddPackageFormComponent {
  @Output() onAddEmit = new EventEmitter<number>();
  addPackageInfo() {
    this.onAddEmit.emit();
  }
}
