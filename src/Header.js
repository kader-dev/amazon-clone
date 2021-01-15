import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div class="header__search">
        <input type="text" class="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div class="header__nav">
        <Link to="/login" className="header__link">
          <div class="header__option">
            <span className="header__optionLineOne">Heey</span>
            <span className="header__optionLineTwo">SignIn</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div class="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div class="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div class="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {" "}
              0{" "}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
