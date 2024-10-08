enum routeNames {
  dashboard = 'dashboard',
  home = 'home',
  booking = 'booking',
  login = 'login',
  invoice = 'invoice',
  salesReport = 'sales-report',
  officeDepotItems = 'office-depot-items',
  changeMasterApi = 'change-master-api',
  printers = 'printers',
  serviceItems = 'service-items',
  // accountReport = 'account-report',
  debtReport = 'debt-report',
  demandReport = 'demand-report',
  incomeReport = 'income-report',
  expenseReport = 'expense-report',
  assetReport = 'asset-report',
  services = 'services',
  manifest = 'manifest',
  drivers = 'drivers',
  printManifest = 'print-manifest',
  traditionalManifest = 'traditional-manifest',
  vehicles = 'vehicles',
}
export enum routeLinks {
  dashboard = routeNames.dashboard,
  home = '/' + routeNames.dashboard + '/' + routeNames.home,
  booking = '/' + routeNames.dashboard + '/' + routeNames.booking,
  salesReport = '/' + routeNames.dashboard + '/' + routeNames.salesReport,
  officeDepotItems = '/' +
    routeNames.dashboard +
    '/' +
    routeNames.officeDepotItems,
  invoice = '/' + routeNames.dashboard + '/' + routeNames.invoice,
  printManifest = '/' + routeNames.dashboard + '/' + routeNames.printManifest,
  printers = '/' + routeNames.dashboard + '/' + routeNames.printers,
  drivers = '/' + routeNames.dashboard + '/' + routeNames.drivers,
  serviceItems = '/' + routeNames.dashboard + '/' + routeNames.serviceItems,
  services = '/' + routeNames.dashboard + '/' + routeNames.services,
  debtReport = '/' + routeNames.dashboard + '/' + routeNames.debtReport,
  demandReport = '/' + routeNames.dashboard + '/' + routeNames.demandReport,
  incomeReport = '/' + routeNames.dashboard + '/' + routeNames.incomeReport,
  expenseReport = '/' + routeNames.dashboard + '/' + routeNames.expenseReport,
  assetReport = '/' + routeNames.dashboard + '/' + routeNames.assetReport,
  manifest = '/' + routeNames.dashboard + '/' + routeNames.manifest,
  traditionalManifest = '/' +
    routeNames.dashboard +
    '/' +
    routeNames.traditionalManifest,
  vehicles = '/' + routeNames.dashboard + '/' + routeNames.vehicles,
  login = '/' + routeNames.login,
  changeMasterApi = '/' + routeNames.changeMasterApi,
}

export const Links = {
  dashboard: { name: routeNames.dashboard, route: routeLinks.dashboard },
  invoice: { name: routeNames.invoice, route: routeLinks.invoice },
  printManifest: {
    name: routeNames.printManifest,
    route: routeLinks.printManifest,
  },
  home: { name: routeNames.home, route: routeLinks.home },
  booking: { name: routeNames.booking, route: routeLinks.booking },
  salesReport: { name: routeNames.salesReport, route: routeLinks.salesReport },
  printers: { name: routeNames.printers, route: routeLinks.printers },
  drivers: { name: routeNames.drivers, route: routeLinks.drivers },
  vehicles: { name: routeNames.vehicles, route: routeLinks.vehicles },
  serviceItems: {
    name: routeNames.serviceItems,
    route: routeLinks.serviceItems,
  },
  debtReport: {
    name: routeNames.debtReport,
    route: routeLinks.debtReport,
  },
  demandReport: {
    name: routeNames.demandReport,
    route: routeLinks.demandReport,
  },

  incomeReport: {
    name: routeNames.incomeReport,
    route: routeLinks.incomeReport,
  },

  expenseReport: {
    name: routeNames.expenseReport,
    route: routeLinks.expenseReport,
  },

  assetReport: {
    name: routeNames.assetReport,
    route: routeLinks.assetReport,
  },

  manifest: {
    name: routeNames.manifest,
    route: routeLinks.manifest,
  },
  traditionalManifest: {
    name: routeNames.traditionalManifest,
    route: routeLinks.traditionalManifest,
  },
  officeDepotItems: {
    name: routeNames.officeDepotItems,
    route: routeLinks.officeDepotItems,
  },
  services: {
    name: routeNames.services,
    route: routeLinks.services,
  },
  login: {
    name: routeNames.login,
    route: routeLinks.login,
  },
  changeMasterApi: {
    name: routeNames.changeMasterApi,
    route: routeLinks.changeMasterApi,
  },
};
