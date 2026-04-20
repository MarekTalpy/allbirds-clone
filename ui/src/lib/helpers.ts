/**
 * Formats a numeric price into a localized currency string.
 * Uses the native Intl.NumberFormat API for proper symbol placement and decimals.
 * * @example formatPrice(120.5, 'EUR', 'sk-SK') => "120,50 €"
 * @example formatPrice(95, 'USD', 'en-US') => "$95.00"
 * * @param price - The numeric value to format
 * @param currency - ISO 4217 currency code (e.g., 'USD', 'EUR')
 * @param locale - BCP 47 language tag (e.g., 'en-US', 'sk-SK')
 */
export const formatPrice = (price: number, currency: string = 'EUR', locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price);
};

/**
 * Creates an immutable Price object with a fixed precision of 2 decimal places.
 * Uses Object.freeze to prevent accidental mutations in the cart or state.
 * * @example createPrice(45.999) => { amount: 46.00, currency: '$' }
 * * @param amount - The raw numeric amount
 * @param currency - The currency symbol or code (defaults to '$')
 * @returns A read-only IPrice object
 */
export const createPrice = (amount: number, currency: string = '$') => {
  // Ensure we are working with a valid number before rounding
  const cleanAmount = typeof amount === 'number' ? amount : parseFloat(amount);

  return Object.freeze({
    amount: Number(cleanAmount.toFixed(2)),
    currency,
  });
};

/**
 * Checks if a product is "New" based on its release date.
 * @param releaseDate - ISO date string (e.g., "2026-03-15T10:00:00Z")
 * @param daysThreshold - Default is 30 days
 * @returns boolean
 */
export const isNewArrival = (releaseDate: string | undefined, daysThreshold: number = 30): boolean => {
  if (!releaseDate) return false;

  const launchDate = new Date(releaseDate).getTime();
  const now = new Date().getTime();

  // Calculate the difference in milliseconds
  const diffInMs = now - launchDate;

  // Convert threshold days to milliseconds
  const thresholdInMs = daysThreshold * 24 * 60 * 60 * 1000;

  // Return true if the product was released within the threshold
  // and is not a "future" date (unless you allow pre-orders)
  return diffInMs >= 0 && diffInMs <= thresholdInMs;
};

/**
 * Splits an array into a two-dimensional array of smaller "chunks."
 * Useful for paginating data, creating grid rows, or grouping items for carousel slides.
 * * @template T - The type of elements in the array
 * @param array - The source array to be partitioned
 * @param size - The maximum number of elements per chunk
 * @returns A new array containing the partitioned sub-arrays
 * * @example
 * chunkArray([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export const chunkArray = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size));
};
