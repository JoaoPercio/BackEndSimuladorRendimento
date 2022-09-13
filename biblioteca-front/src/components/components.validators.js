import { THEMES } from '@/components/components.constants';

export function validator(value, ...args) {
  return value && args.includes(value);
}

export function themeValidator(theme) {
  return theme && THEMES.includes(theme);
}
