export const CART_STORAGE_KEY = 'mv_cart';

/**
 * Reads the persisted cart from localStorage.
 * Storage can be unavailable (private browsing) or hold corrupt JSON,
 * so every failure degrades to an empty cart instead of crashing the app.
 */
export function readStoredCart() {
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('Unable to read the saved cart, starting empty.', error);
    return [];
  }
}

export function writeStoredCart(cart) {
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn('Unable to persist the cart to localStorage.', error);
  }
}
