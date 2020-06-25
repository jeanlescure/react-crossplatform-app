export interface AppAlertOptions {
  message: string;
  level: 'alert' | 'error' | 'warning' | 'success' | 'info';
  verifyLabel?: string;
  dismissLabel?: string;
  onVerify?: Function;
  onDismiss?: Function;
  show?: boolean;
}
