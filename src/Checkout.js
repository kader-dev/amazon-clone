import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://m.media-amazon.com/images/G/08//ape/fallback/static/FR_HouseAdsASV_970x250._CB1198675309_.jpg"
        alt=""
      />
    </div>
  );
}

export default Checkout;
