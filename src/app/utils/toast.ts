import { NiraSnackBarService, SnakBarConfig } from 'nira-snack-bar';
import { AppInjector } from '../app.module';

export function createToastNotification(
  message: string,
  options: SnakBarConfig = {
    duration: 3000,
    horizontalPosition: 'bottom',
    verticalPosition: 'center',
    statusClass: 'success',
  }
) {
  const snackBar = AppInjector.get(NiraSnackBarService);
  snackBar.show(message, options);
}

export function Toast<T>(
  messageFormatter: (result: T) => string,
  options?: Omit<SnakBarConfig, 'message'>
) {
  return function (
    target: object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: unknown[]) {
      const { showToast } = args[0] as { showToast: boolean | undefined };
      const result = (await originalMethod.apply(this, args)) as T;
      if (result && showToast !== false)
        createToastNotification(messageFormatter(result), options);
      return result;
    };
  };
}
