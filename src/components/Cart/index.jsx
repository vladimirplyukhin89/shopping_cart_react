import CartHeader from "../CartHeader";
import Product from "../Product";
import CartFooter from "../CartFooter";
import data from "../../data";
import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

const Cart = () => {
  const [cart, setCart] = useState(data);

  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0),
    count: cart.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => {
        return prev + curr.priceTotal;
      }, 0),
      count: cart.reduce((prev, curr) => {
        return prev + curr.count;
      }, 0),
    });
  }, [cart]);

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

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <CartContext.Provider
        value={{
          deleteProduct,
          id: product.id,
          increase,
          decrease,
          changeValue,
        }}
      >
        <Product key={product.id} product={product} />
      </CartContext.Provider>
    );
  });

  return (
    <section className="cart">
      <CartHeader />

      {products}

      <CartFooter total={total} />
    </section>
  );
};

export default Cart;
