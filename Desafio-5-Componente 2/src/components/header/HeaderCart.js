import React, { useState } from "react";
import foto1 from "../../img/cart-dropdown/00.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const HeaderCart = () => {
  const [count, SetCount] = useState(0);

  const HandleLessCount = () => {
    if (count > 0) {
      SetCount(count - 1);
    }
  };

  const HandleMoreCount = () => {
    if (count < 5) {
      SetCount(count + 1);
    }
  };

  return (
    <div className="cart">
      <a id="BtnHeaderCart" href="cart.html"></a>
      <i className="icon-bag"></i>
      <span id="CountProductCart" className="count">
        3
      </span>
      <span id="TotalPurchaseCart" className="subtotal">
        293.77
      </span>
      <div className="toolbar-dropdown" id="ShoppingToolbar-dropdown">
        <div id="divThird-1205" className="dropdown-product-item">
          <span
            id="spanFirst-1205"
            className="dropdown-product-remove"
            onclick="removeElementCart(0,1205)"
          ></span>
          <a
            id="aSecond-1205"
            className="dropdown-product-thumb"
            href="shop-single.html"
          >
            <img id="img-1205" src={foto1} alt="Imagen Producto" />
          </a>
          <div id="div-1205" className="dropdown-product-info">
            <a
              id="aFirst-1205"
              className="dropdown-product-title"
              href="shop-single.html"
            >
              Zapatilla Adidas
            </a>
          </div>

          <span id="spanLast-1205" className="dropdown-product-detailse">
            <tr>
              <i>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={(e) => HandleMoreCount()}
                />
              </i>
            </tr>
            <tr>
              <i>
                {count ? (
                  <FontAwesomeIcon
                    icon={faMinus}
                    onClick={(e) => HandleLessCount()}
                  />
                ) : null}
              </i>
            </tr>
          </span>
        </div>
        <h6>Cantidad {count}</h6>
        <div id="divFooter" className="toolbar-dropdown-group">
          <div id="divTotal" className="column">
            <span id="spanTotal" className="text-lg">
              Total:
            </span>
          </div>
          <div id="divPrecio" className="column text-right">
            <span id="spanPrecio" className="text-lg text-medium">
              293.77
            </span>
          </div>
        </div>
        <div id="BtnHeader" className="toolbar-dropdown-group">
          <div id="divFooter1" className="column">
            <a
              id="BtnHeaderCart"
              className="btn btn-sm btn-block btn-secondary"
              href="cart.html"
            >
              Mi Carrito
            </a>
          </div>
          <div id="divFooter2" className="column">
            <a
              id="BtnHeaderCart2"
              className="btn btn-sm btn-block btn-success"
              href="checkout-address.html"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
