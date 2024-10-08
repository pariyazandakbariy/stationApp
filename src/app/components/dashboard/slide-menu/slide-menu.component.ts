import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { ISlideMenuLabel, SlideMenuLabels } from './slide-menu.label';
import { Links, routeLinks } from 'src/app/utils/links';
import { DashboardIconComponent } from 'src/app/svg-icons/dashboard-icon/dashboard-icon.component';
import { OrderIconComponent } from 'src/app/svg-icons/order-icon/order-icon.component';
import { NiraModalService } from 'nira-modal';
import { MessageLogoutDialogComponent } from '../../dialogs/message-logout-dialog/message-logout-dialog.component';
import { PrintIconComponent } from 'src/app/svg-icons/print-icon/print-icon.component';
import { LocalShippingIconComponent } from 'src/app/svg-icons/local-shipping-icon/local-shipping-icon.component';
import { Util } from 'src/app/utils/util';
import { PersonIconComponent } from 'src/app/svg-icons/person-icon/person-icon.component';
import { ApplicationDS } from 'src/app/store/applicationDS.service';
import MyInfoDM from 'src/app/store/dataModels/myInfoDM';

export interface Item {
  title: string;
  icon: Type<any> | null;
  link: routeLinks | null;
  type: string;
  child: any;
}
@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent {
  labels: ISlideMenuLabel =
    this.labelManagerService.getLabels<ISlideMenuLabel>(SlideMenuLabels);
  @Input() isMenuSelect = false;
  @Output() isSelectedItemEmit = new EventEmitter<boolean>();
  menuItemClicked!: Item;
  childItemClicked!: any;
  menuList: Item[] = [
    {
      title: this.labels.exportWaybill,
      icon: OrderIconComponent,
      link: this.links.booking.route,
      type: 'menu',
      child: [],
    },
    {
      title: this.labels.historyWaybill,
      icon: OrderIconComponent,
      link: this.links.salesReport.route,
      type: 'menu',
      child: [],
    },
    {
      title: this.labels.manifest,
      icon: OrderIconComponent,
      link: this.links.manifest.route,
      type: 'menu',
      child: [],
    },
    {
      title: this.labels.traditionalManifest,
      icon: OrderIconComponent,
      link: this.links.traditionalManifest.route,
      type: 'menu',
      child: [],
    },
    {
      title: this.labels.cargoInsideStore,
      icon: OrderIconComponent,
      link: this.links.officeDepotItems.route,
      type: 'menu',
      child: [],
    },
    {
      title: this.labels.report,
      icon: OrderIconComponent,
      link: null,
      type: 'menu',
      child: [
        {
          title: this.labels.debtReport,
          icon: OrderIconComponent,
          link: this.links.debtReport.route,
          type: 'menu',
          child: [],
        },
        {
          title: this.labels.demandReport,
          icon: OrderIconComponent,
          link: this.links.demandReport.route,
          type: 'menu',
          child: [],
        },
        {
          title: this.labels.incomeReport,
          icon: OrderIconComponent,
          link: this.links.incomeReport.route,
          type: 'menu',
          child: [],
        },
        {
          title: this.labels.expenseReport,
          icon: OrderIconComponent,
          link: this.links.expenseReport.route,
          type: 'menu',
          child: [],
        },
        {
          title: this.labels.assetReport,
          icon: OrderIconComponent,
          link: this.links.assetReport.route,
          type: 'menu',
          child: [],
        },
      ],
    },

    {
      title: this.labels.serviceItems,
      icon: LocalShippingIconComponent,
      link: this.links.serviceItems.route,
      type: 'menu',
      child: [],
    },
    {
      title: this.labels.services,
      icon: LocalShippingIconComponent,
      link: this.links.services.route,
      type: 'menu',
      child: [],
    },

    {
      title: this.labels.vehicles,
      icon: LocalShippingIconComponent,
      link: this.links.vehicles.route,
      type: 'menu',
      child: [],
    },
    {
      title: this.labels.drivers,
      icon: PersonIconComponent,
      link: this.links.drivers.route,
      type: 'menu',
      child: [],
    },
    {
      title: this.labels.printers,
      icon: PrintIconComponent,
      link: this.links.printers.route,
      type: 'menu',
      child: [],
    },
  ];

  get isRunningOnSmallScreen() {
    return Util.isRunningOnSmallScreen();
  }
  get links() {
    return Links;
  }
  get user() {
    return this.applicationDS.myInfo;
  }
  constructor(
    private labelManagerService: LabelManagerService,
    private niraModalService: NiraModalService,
    private applicationDS: ApplicationDS
  ) {}

  onMenuBtnClick() {
    if (this.isRunningOnSmallScreen) {
      this.isMenuSelect = true;
      this.isSelectedItemEmit.emit(this.isMenuSelect);
    }
  }
  onItemClick(menuItem: Item) {
    if (menuItem.child.length) {
      this.onMenuItemClick(menuItem);
    } else {
      if (this.isRunningOnSmallScreen) {
        this.isMenuSelect = true;
        this.isSelectedItemEmit.emit(this.isMenuSelect);
      }
    }
  }

  onMenuItemClick(menuItem: Item) {
    if (this.menuItemClicked == menuItem) {
      this.menuItemClicked = {} as Item;
    } else {
      this.menuItemClicked = menuItem;
    }
  }

  onItemChildClick(child: any) {
    this.childItemClicked = child;

    if (this.isRunningOnSmallScreen) {
      this.isMenuSelect = true;
      this.isSelectedItemEmit.emit(this.isMenuSelect);
    }
  }
  logOut() {
    this.niraModalService.open(MessageLogoutDialogComponent, {
      data: {},
    });
  }
}
