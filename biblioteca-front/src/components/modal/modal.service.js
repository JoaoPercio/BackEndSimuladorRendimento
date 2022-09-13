import { Modal } from 'bootstrap';

const MODAL_EVENTS = {
  ON_SHOW: 'show.bs.modal',
  ON_SHOWED: 'shown.bs.modal',
  ON_HIDE: 'hide.bs.modal',
  ON_HIDDEN: 'hidden.bs.modal',
  ON_HIDE_PREVENTED: 'hidePrevented.bs.modal',
};

export function buildModal(element, options = {}) {
  let modal = null;

  if (element) {
    modal = createModal(element, options);
    buildEvents(element, options);
  }

  return modal;
}

function createModal(element, options) {
  const config = {
    backdrop: options.backdrop || 'static',
    keyboard: options.keyboard || true,
    focus: options.focus || true,
  };

  return new Modal(element, config);
}

function buildEvents(element, options) {
  if (options.onShow) {
    element.addEventListener(MODAL_EVENTS.ON_SHOW, options.onShow);
  }

  if (options.onShowed) {
    element.addEventListener(MODAL_EVENTS.ON_SHOWED, options.onShowed);
  }

  if (options.onHide) {
    element.addEventListener(MODAL_EVENTS.ON_HIDE, options.onHide);
  }

  if (options.onHidden) {
    element.addEventListener(MODAL_EVENTS.ON_HIDDEN, options.onHidden);
  }

  if (options.onHidePrevent) {
    element.addEventListener(MODAL_EVENTS.ON_HIDE_PREVENTED, options.onHidePrevent);
  }
}
