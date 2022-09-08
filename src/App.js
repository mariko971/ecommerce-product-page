import React from "react";

import CartComponent from "./components/cart";
import "./App.css";

function App() {
  return (
    <div className="App">
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
          <img src="./images/icon-cart.svg" alt="cart icon" id="cartIcon" />
          <span className="cartQty">3</span>
          <span className="avatar-outline">
            <img src="./images/image-avatar.png" alt="avatar" id="avatar" />
          </span>
        </nav>
        <CartComponent />
      </header>
      <main>
        <section className="product-gallery">
          <div className="product-img"></div>
          <ul className="product-thumbnails">
            <li className="thumbnail t1"></li>
            <li className="thumbnail t2"></li>
            <li className="thumbnail t3"></li>
            <li className="thumbnail t4"></li>
          </ul>
        </section>
        <section className="product-info">
          <h4>SNEAKER COMPANY</h4>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather has to offer.
          </p>
          <h3 id="price">
            $125.00 <span id="discount">50%</span>
          </h3>

          <p id="discounted-price">$250.00</p>
          <footer>
            <div className="toggle-qty">
              <img src="../images/icon-minus.svg" alt="minus" id="minus" />
              <p id="quantity">0</p>
              <img src="../images/icon-plus.svg" alt="plus" id="plus" />
            </div>
            <button id="addToCart-btn" className="btn">
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
      {/* <h1>its working</h1> */}
    </div>
  );
}

export default App;
