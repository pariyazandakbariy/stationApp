export type ThemePalette = 'square' | 'round';

export type ButtonType = 'button';

export type LayoutRadioButtons = 'row' | 'column';

export type InputType = 'number' | 'password' | 'text';
export type ButtonSize = 'small' | 'medium';

export type MenuItem<T> = {
  title: T;
  value: T;
};

export type ColorState =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type PackageType = { title: string; value: string };
export type ConfirmDialog = {
  title: string;
  text: string;
  confirmBtn: string;
  cancelBtn: string;
  color?: ColorState;
};
export enum ScannerMode {
  BILL = 'Bill',
  PACK = 'Pack',
  ALL = 'all',
}

export enum DetailViewers {
  BILL = 'bill',
  DRIVER = 'driver',
  MANIFEST = 'manifest',
  SERVICE = 'service',
  VEHICLE = 'vehicle',
}

export interface ErrorType {
  description_en: string;
  description_fa: string;
  errorCode: number;
}
