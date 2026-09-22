import { createContext } from 'react';

/**
 * Holds the cart shape shared by {@link CartProvider} and {@link useCart}.
 * Kept in its own module so the provider file only exports a component,
 * which keeps React Fast Refresh working.
 */
export const CartContext = createContext(null);
