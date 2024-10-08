import { Component, Input } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-core-header',
  templateUrl: './core-header.component.html',
  styleUrls: ['./core-header.component.scss'],
})
export class CoreHeaderComponent {
  constructor (private _location:Location){}

  @Input() label: string = '';

  goBack(){
    this._location.back();

  }

}
