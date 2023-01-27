export const toggleCart = () => {
  const cartIcon = document.getElementById("cartIcon");
  const cartComponent = document.querySelector(".cartComponent");
  cartIcon.addEventListener("click", () => {
    cartComponent.style.display = "block";
  });
};

export const toggleLightBox = (toggle) => {
  if (window.innerWidth > 768) {
    const modal = document.querySelector(".modal");
    const app = document.querySelector(".App");
    if (toggle) {
      modal.style.transform = "scale(1)";
      modal.style.position = "fixed";
    } else {
      modal.style.transform = "scale(0)";
      modal.style.position = "absolute";
    }
  }
};

export const addToCart = (data, setCart, cart) => {
  const { title, itemThumbnails, calcDiscount, discount, unitPrice } = data;
  const qty = document.getElementById("quantity").innerHTML;
  const price = calcDiscount(unitPrice, discount);
  const product = {
    productTitle: title,
    productThumbnail: `./images/${itemThumbnails[0]}`,
    productPrice: price,
    productQty: parseInt(qty),
    totalPrice: price * qty,
  };
  const newCart = [...cart, product];
  setCart(newCart);
};

export const toggleMobMenu = (toggle) => {
  const menuWrapper = document.querySelector(".nav-links-wrapper");
  const app = document.querySelector(".App");

  if (toggle) {
    menuWrapper.style.left = "0";
    app.style.position = "fixed";
  } else {
    menuWrapper.style.left = "-200%";
    app.style.position = "initial";
  }
};
