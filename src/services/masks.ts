import Masker from 'vanilla-masker';

/**
 * It masks the phone number.
 *
 * @param {string} value - The value to be masked.
 */
export const maskPhone = (value: string) =>
  value ? Masker.toPattern(value, '(99) 99999-9999') : '';

/**
 * It masks the cpf number.
 *
 * @param {string} value - The value to be masked.
 */
export const maskCpf = (value: string) =>
  value ? Masker.toPattern(value, '999.999.999-99') : '';

/**
 * It masks the date and time.
 *
 * @param {string} value - The value to be masked.
 */
export const maskDateTime = (value: string) =>
  value ? Masker.toPattern(value, '99/99/9999 99:99') : '';

/**
 * It masks the hour part of a time value.
 *
 * @param {string} value - The value to be masked.
 */
export const maskHour = (value: string) =>
  value ? Masker.toPattern(value, '99:99') : '';

/**
 * It removes all non-numeric characters from a string.
 *
 * @param {any} value - The value of the input field.
 */
export const unmaskField = (value: any) =>
  value ? value.replace(/\D/g, '') : '';

/**
 * It masks the cnpj number.
 *
 * @param {string} value - The value to be masked.
 */
export const maskCnpj = (value: string) =>
  value ? Masker.toPattern(value, '99.999.999/9999-99') : '';
