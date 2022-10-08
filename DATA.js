export const data = {
  company: "sneaker company",
  itemImages: [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ],
  itemThumbnails: [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
  ],
  title: "Fall Limited Edition Sneakers",
  unitPrice: 250,
  itemDesctiption:
    "These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather has to offer.",
  discount: 50,
  calcDiscount: (a, b) => (a * b) / 100,
};
