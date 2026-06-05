"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/lib/products";

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartLine[];
  totalItems: number;
  isCartOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      totalItems,
      isCartOpen,
      addItem(product) {
        setItems((current) => {
          const existing = current.find((item) => item.product.id === product.id);
          if (existing) {
            return current.map((item) =>
              item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            );
          }

          return [...current, { product, quantity: 1 }];
        });
        setCartOpen(true);
      },
      removeItem(productId) {
        setItems((current) => current.filter((item) => item.product.id !== productId));
      },
      updateQuantity(productId, quantity) {
        setItems((current) =>
          current
            .map((item) =>
              item.product.id === productId
                ? { ...item, quantity: Math.max(1, Math.min(99, quantity)) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        );
      },
      clearCart() {
        setItems([]);
      },
      openCart() {
        setCartOpen(true);
      },
      closeCart() {
        setCartOpen(false);
      },
    }),
    [isCartOpen, items, totalItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
