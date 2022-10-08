import React, { useState } from "react";

import "./gallery.css";
import { toggleLightBox } from "../../utils";

const Gallery = ({ itemImages, itemThumbnails, isModal }) => {
  const [current, setCurrent] = useState(0);
  return (
    <section className="product-gallery">
      <div
        className="product-img"
        style={{
          background: `url(./images/${itemImages[current]}) no-repeat center/cover`,
        }}
        onClick={toggleLightBox}
      >
        {isModal ? (
          <>
            <img
              src="../images/icon-previous.svg"
              alt="previous button"
              className="modal-btn prev-btn"
              onClick={() =>
                setCurrent(current === 0 ? itemImages.length - 1 : current - 1)
              }
            />
            <img
              src="../images/icon-next.svg"
              alt="next button"
              className="modal-btn next-btn"
              onClick={() =>
                setCurrent(current === itemImages.length - 1 ? 0 : current + 1)
              }
            />
          </>
        ) : null}
      </div>
      <ul className="product-thumbnails">
        {itemThumbnails.map((item, i) => (
          <li
            className={`thumbnail ${current === i ? "active" : "inActive"}`}
            key={i}
            style={{
              background: `url(./images/${item}) no-repeat center/cover`,
            }}
            onClick={() => setCurrent(i)}
          ></li>
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
