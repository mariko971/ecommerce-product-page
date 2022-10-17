import React, { useRef, useState } from "react";

import CartComponent from "./components/cart/cart";
import { data } from "../DATA";
import { addToCart } from "./utils";
import "./App.css";
import Gallery from "./components/gallery/gallery";

// COMPONENT WITH FEATURES FOR INCREASING AND DECREASING ITEM QUANTITY

function ProductQty() {
  const [prodQty, setProdQty] = useState(1);
  return (
    <div className="toggle-qty">
      <img
        src="../images/icon-minus.svg"
        alt="minus"
        id="minus"
        onClick={() => (prodQty > 1 ? setProdQty(prodQty - 1) : setProdQty(1))}
      />
      <p id="quantity">{prodQty}</p>
      <img
        src="../images/icon-plus.svg"
        alt="plus"
        id="plus"
        onClick={() => setProdQty(prodQty + 1)}
      />
    </div>
  );
}

// MAIN APP COMPONENT

function App() {
  const [cart, setCart] = useState([]);
  const cartRef = useRef();
  let cartNotDisplayed = true;

  let cartQuantity = cart.length
    ? cart.map((item) => item.productQty).reduce((prev, cur) => prev + cur, 0)
    : 0;

  const toggleCart = () => {
    cartNotDisplayed
      ? ((cartRef.current.style.display = "block"), (cartNotDisplayed = false))
      : ((cartRef.current.style.display = "none"), (cartNotDisplayed = true));
  };

  return (
    <div className="App">
      {/* ----Navigation bar---- */}

      <header className="header">
        <nav id="navigation">
          <img src="./images/logo.svg" alt="logo" id="logo" />
          <ul className="nav-links">
            <li className="link">
              Collections <span className="highlight"></span>
            </li>
            <li className="link">
              Men <span className="highlight"></span>
            </li>
            <li className="link">
              Women <span className="highlight"></span>
            </li>
            <li className="link">
              About <span className="highlight"></span>
            </li>
            <li className="link">
              Contact <span className="highlight"></span>
            </li>
          </ul>
          <img
            src="./images/icon-cart.svg"
            alt="cart icon"
            id="cartIcon"
            onClick={toggleCart}
          />
          {/* -----feature to display number of items in cart---- */}

          {cart.length ? (
            <span className="cart-count">{cartQuantity}</span>
          ) : null}

          <span className="avatar-outline">
            <img src="./images/image-avatar.png" alt="avatar" id="avatar" />
          </span>
        </nav>
        <CartComponent cartRef={cartRef} cart={cart} setCart={setCart} />
      </header>

      {/* ----Main component rendering product information and images */}

      <main>
        <Gallery
          itemImages={data.itemImages}
          itemThumbnails={data.itemThumbnails}
          isModal={false}
        />
        {/* -------LIGHTBOX FEATURE------- */}

        <article className="modal">
          <div className="modal-gallery-container">
            {/* close button */}
            <svg
              className="modal-close-btn"
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                (document.querySelector(".modal").style.transform = "scale(0)")
              }
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fill-rule="evenodd"
              />
            </svg>

            <Gallery
              itemImages={data.itemImages}
              itemThumbnails={data.itemThumbnails}
              isModal={true}
            />
          </div>
        </article>

        {/* ----product details---- */}

        <section className="product-info">
          <h4>{data.company.toUpperCase()}</h4>
          <h2>{data.title}</h2>
          <p>{data.itemDesctiption}</p>
          <h3 id="price">
            ${data.calcDiscount(data.unitPrice, data.discount).toFixed(2)}{" "}
            <span id="discount">{`${data.discount}%`}</span>
          </h3>
          <p id="discounted-price">${data.unitPrice.toFixed(2)}</p>

          {/* ----add to cart button and quantity selection features */}

          <footer>
            <ProductQty />
            <button
              id="addToCart-btn"
              className="btn"
              onClick={() => addToCart(data, setCart, cart)}
            >
              <img
                src="../images/icon-cart-white.svg"
                alt="cart"
                id="cartIcon-btn"
              />
              <p>Add to cart</p>
            </button>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
