import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import {
  CoreSidePanel,
  CoreSidePanelConfig,
} from 'src/app/services/coreSidePanel.service';

@Component({
  selector: 'core-side-panel',
  templateUrl: './core-side-panel.component.html',
  styleUrls: ['./core-side-panel.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          width: '0px',
          opacity: 0.8,
        })
      ),
      transition('open => closed', [animate('0.12s')]),
      transition('closed => open', [animate('0.12s')]),
    ]),
  ],
})
export class CoreSidePanelComponent {
  get selectedComponent() {
    return this.coreSidePanel.selectedComponent;
  }
  selectedConfig: CoreSidePanelConfig | undefined = undefined;

  myInputs: any;
  constructor(private coreSidePanel: CoreSidePanel) {}

  ngOnInit(): void {
    this.coreSidePanel.selectedConfig.subscribe((data) => {
      this.myInputs = { data: data?.data };
      this.selectedConfig = data;
    });
  }
  onRootClicked() {
    this.coreSidePanel.closeAll();
  }
  onPanelClicked(event: Event) {
    event.stopPropagation();
  }
}
