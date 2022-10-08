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
