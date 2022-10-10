export const toggleCart = () => {
  const cartIcon = document.getElementById("cartIcon");
  const cartComponent = document.querySelector(".cartComponent");
  cartIcon.addEventListener("click", () => {
    cartComponent.style.display = "block";
  });
};

export const toggleLightBox = () => {
  const modal = document.querySelector(".modal");
  modal.style.transform = "scale(1)";
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
