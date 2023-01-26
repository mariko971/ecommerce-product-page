import React, { useState } from "react";

import "./gallery.css";
import { toggleLightBox } from "../../utils";
import {
  GalleryNextBtn,
  GalleryPrevBtn,
} from "../gallery-buttons/gallery_nav_btns";

const Gallery = ({ itemImages, itemThumbnails, isModal }) => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="product-gallery">
      <GalleryPrevBtn
        itemImages={itemImages}
        current={current}
        setCurrent={setCurrent}
        cName="gallery-prev-btn"
      />
      <GalleryNextBtn
        itemImages={itemImages}
        current={current}
        setCurrent={setCurrent}
        cName="gallery-next-btn"
      />
      <div
        className="product-img"
        style={{
          background: `url(./images/${itemImages[current]}) no-repeat center/cover`,
        }}
        onClick={() => toggleLightBox(true)}
      >
        {isModal ? (
          <>
            {/* ---Modal button-previous--- */}
            <GalleryPrevBtn
              itemImages={itemImages}
              current={current}
              setCurrent={setCurrent}
              cName="modal-prev-btn"
            />
            <GalleryNextBtn
              itemImages={itemImages}
              current={current}
              setCurrent={setCurrent}
              cName="modal-next-btn"
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
