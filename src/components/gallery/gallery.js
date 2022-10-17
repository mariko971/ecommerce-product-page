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
            {/* ---Modal button-previous--- */}
            <svg
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="modal-btn prev-btn"
              onClick={() =>
                setCurrent(current === 0 ? itemImages.length - 1 : current - 1)
              }
            >
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
            {/* ---modal button-next--- */}
            <svg
              width="13"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="modal-btn next-btn"
              onClick={() =>
                setCurrent(current === itemImages.length - 1 ? 0 : current + 1)
              }
            >
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
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
