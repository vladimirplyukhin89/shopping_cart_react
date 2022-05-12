import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import { priceFormatter } from "../../utils/priceFormatter";
import "./style.scss";

const Product = ({ product }) => {
  const { img, title, priceTotal, count } = product;

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/${img}`} alt={title} />
      </div>

      <div className="product__title">{title}</div>

      <div className="product__count">
        <Count count={count} />
      </div>

      <div className="product__price">{priceFormatter.format(priceTotal)}</div>

      <div className="product__controls">
        <ButtonDelete />
      </div>
    </section>
  );
};

export default Product;
