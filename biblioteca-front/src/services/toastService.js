import { Notification } from 'element-ui';

const TOAST_DEFAULTS = Object.freeze({
  offset: 60,
  duration: 4000,
  showClose: true,
});

const TOAST_TYPES = Object.freeze({
  INFO: 'info',
  DANGER: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
});

function toast(title, message, type) {
  if (message) {
    setTimeout(() => {
      Notification({
        type,
        title,
        message,
        ...TOAST_DEFAULTS,
      });
    }, 0);
  }
}

export function toastInfo(message) {
  toast('Importante', message, TOAST_TYPES.INFO);
}

export function toastError(message) {
  toast('Erro', message, TOAST_TYPES.DANGER);
}

export function toastSuccess(message) {
  toast('Sucesso', message, TOAST_TYPES.SUCCESS);
}

export function toastWarning(message) {
  toast('Alerta', message, TOAST_TYPES.WARNING);
}
