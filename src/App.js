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
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            id="cartIcon"
            onClick={toggleCart}
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            />
          </svg>
          {/* <img
            src="./images/icon-cart.svg"
            alt="cart icon"
            id="cartIcon"
            onClick={toggleCart}
          /> */}
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
