export function isLocale(tested) {
  return locales.some(locale => locale === tested)
}