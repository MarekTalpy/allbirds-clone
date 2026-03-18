export const formatPrice = (price: number, currency: string = 'EUR', locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price);
};
