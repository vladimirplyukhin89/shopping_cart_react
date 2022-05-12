import CartHeader from "../CartHeader";
import Product from "../Product";
import CartFooter from "../CartFooter";
import data from "../../data";
import { useState, createContext, useContext } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

const Cart = () => {
  const [cart, setCart] = useState(data);

  const deleteProduct = (id) => {
    setCart((prevState) => prevState.filter((product) => product.id !== id));
  };

  const increase = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <CartContext.Provider
        value={{ deleteProduct, id: product.id, increase, decrease }}
      >
        <Product key={product.id} product={product} />
      </CartContext.Provider>
    );
  });

  return (
    <section className="cart">
      <CartHeader />

      {products}

      <CartFooter />
    </section>
  );
};

export default Cart;
