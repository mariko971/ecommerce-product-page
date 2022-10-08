import React, { useState, useRef, useEffect } from "react";

import "./cart.css";

function CartComponent({ cartRef, cart }) {
  const cartQtyRef = useRef();
  const cartQuantity = cart.length
    ? cart.map((item) => item.qty).reduce((prev, cur) => prev + cur)
    : null;

  useEffect(() => {
    cartQuantity
      ? ((cartQtyRef.current.style.display = "block"),
        (cartQtyRef.current.innerHTML = cartQuantity))
      : null;
  }, []);

  return (
    <>
      <div className="cartQty" ref={cartQtyRef}></div>
      <div className="cartComponent" ref={cartRef}>
        <header className="cartHeader">Cart</header>
        {cart.length ? (
          <section className="cartItems">
            <>
              <ul className="cartItems-list">
                {cart.map((item, i) => {
                  return (
                    <li key={i} className="cartItem">
                      <aside
                        className="cart-item-thumbnail"
                        style={{
                          backgroundImage: `url(${item.productThumbnail})`,
                        }}
                      ></aside>
                      <article className="cart-item-info">
                        <p className="cart-item-title">{item.productTitle}</p>
                        <p className="cart-item-cost">
                          $
                          {`${item.productPrice.toFixed(2)} x ${
                            item.productQty
                          } `}
                          &nbsp;<strong>{`  $${totalPrice.toFixed(2)}`}</strong>
                        </p>
                      </article>
                      <img
                        src="./images/icon-delete.svg"
                        alt="delete"
                        id="delete-item"
                      />
                    </li>
                  );
                })}
              </ul>
              <button className="checkout-btn">Checkout</button>
            </>
          </section>
        ) : (
          <section className="cartItems-empty">
            <p className="empty-cart">Your cart is empty</p>
          </section>
        )}
      </div>
    </>
  );
}

export default CartComponent;
