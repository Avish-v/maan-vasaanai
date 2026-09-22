import { useCallback, useEffect, useMemo, useState } from 'react';
import { CartContext } from './CartContext';
import { readStoredCart, writeStoredCart } from './cartStorage';

const CART_CLOSED = false;

export function CartProvider({ children }) {
  const [cart, setCart] = useState(readStoredCart);
  const [isCartOpen, setIsCartOpen] = useState(CART_CLOSED);

  useEffect(() => {
    writeStoredCart(cart);
  }, [cart]);

  const addToCart = useCallback((item) => {
    setCart((previousCart) => {
      const existingItem = previousCart.find((entry) => entry.id === item.id);

      if (existingItem) {
        return previousCart.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry,
        );
      }

      return [...previousCart, { ...item, quantity: 1 }];
    });

    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setCart((previousCart) =>
      previousCart
        .map((entry) =>
          entry.id === id
            ? { ...entry, quantity: entry.quantity + delta }
            : entry,
        )
        .filter((entry) => entry.quantity > 0),
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalItems = useMemo(
    () => cart.reduce((count, item) => count + item.quantity, 0),
    [cart],
  );

  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      totalItems,
      subtotal,
    }),
    [
      cart,
      addToCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      totalItems,
      subtotal,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
