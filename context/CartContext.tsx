import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Wig = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Wig;

type CartContextType = {
  cart: CartItem[];
  addToCart: (wig: Wig) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Load cart from localStorage on app mount
  useEffect(() => {
    const storedCart = localStorage.getItem("royal_roots_cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save cart to localStorage on every update
  useEffect(() => {
    localStorage.setItem("royal_roots_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (wig: Wig) => {
    setCart((prev) => [...prev, wig]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
