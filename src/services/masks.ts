import Masker from 'vanilla-masker';

export const maskPhone = (value: string) =>
  value ? Masker.toPattern(value, '(99) 99999-9999') : '';

export const maskCpf = (value: string) =>
  value ? Masker.toPattern(value, '999.999.999-99') : '';

export const maskDateTime = (value: string) =>
  value ? Masker.toPattern(value, '99/99/9999 99:99') : '';

export const maskHour = (value: string) =>
  value ? Masker.toPattern(value, '99:99') : '';

export const unmaskField = (value: any) =>
  value ? value.replace(/\D/g, '') : '';

export const maskCnpj = (value: string) =>
  value ? Masker.toPattern(value, '99.999.999/9999-99') : '';
