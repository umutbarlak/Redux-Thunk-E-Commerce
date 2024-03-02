import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  getBasket,
  updateItem,
} from "../redux/actions/basketActions";

const Card = ({ product }) => {
  const store = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  const found = store.basket.find((i) => i.id === product.id);

  const handleClick = () => {
    if (found) {
      dispatch(updateItem(found));
    } else {
      dispatch(addToBasket(product));
    }
  };

  return (
    <div className="card " style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img
          width={250}
          height={200}
          src={product.image}
          alt={product.title}
          className=" mt-4 object-fit-cover rounded"
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>
        {product.specs.map((spec) => (
          <p key={spec}>- {spec}</p>
        ))}
        <button onClick={handleClick} className="btn btn-dark w-100">
          {found ? `Miktarı Arttır (${found.amount})` : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
};

export default Card;
