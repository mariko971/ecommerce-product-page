import React from "react";
import "./gallery_nav_btns.css";

export const GalleryPrevBtn = ({ itemImages, current, setCurrent }) => {
  return (
    <>
      <svg
        width="12"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        className="modal-btn gallery-prev-btn"
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
    </>
  );
};

export const GalleryNextBtn = ({ itemImages, current, setCurrent }) => {
  return (
    <>
      <svg
        width="13"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        className="modal-btn gallery-next-btn"
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
  );
};
