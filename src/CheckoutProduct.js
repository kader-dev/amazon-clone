import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout__product">
      <img className="checkoutProduct__img" src={image} alt="" />
      <div class="checkoutProduct__info">
        <p class="checkoutProduct__title">{title}</p>
        <p class="checkoutProduct__price">
          <strong>{price}</strong>
          <small>TND</small>
        </p>
        <div class="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>&#11088;</p>
            ))}
        </div>
        <button onClick={removeFromBasket}> Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
