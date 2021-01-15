import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div class="product__info">
        <p>{title}</p>
        <p class="product__price">
          <strong>{price}</strong>
          <small>TND</small>
        </p>
        <div class="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>

      <img src={image} />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
