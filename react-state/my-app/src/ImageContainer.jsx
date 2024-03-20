import './ImageContainer.css';
import React, { useState } from 'react';

export function ImageContainer({ imageSrc }) {
  let [count, setCount] = useState(0);

  function handleClick() {
    if (count >= imageSrc.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={imageSrc[count]}
          alt="space-image"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
