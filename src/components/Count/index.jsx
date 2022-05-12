import { useCart } from "../Cart";
import "./style.scss";

const Count = ({ count }) => {
  const { increase, decrease, id } = useCart();
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
        />
      </div>

      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => {
            increase(id);
          }}
        >
          <img src="./img/arrow up.svg" alt="Increase" />
        </button>

        <button
          type="button"
          className="count__down"
          onClick={() => {
            decrease(id);
          }}
        >
          <img src="./img/arrow down.svg" alt="Decrease" />
        </button>
      </div>
    </div>
  );
};

export default Count;
