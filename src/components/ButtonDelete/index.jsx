import { useCart } from "../Cart";

const ButtonDelete = () => {
  const { deleteProduct, id } = useCart();
  return (
    <button
      type="button"
      onClick={() => {
        deleteProduct(id);
      }}
    >
      <img src="./img/x.svg" alt="delete" />
    </button>
  );
};

export default ButtonDelete;
