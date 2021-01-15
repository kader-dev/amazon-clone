import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBAsketTotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBAsketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"TND"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
