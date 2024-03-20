import React, { useState } from 'react';

export function ImageCaption({ imageCap }) {
  const [countCap, setCountCap] = useState(0);

  function handleClickCap() {
    if (countCap >= imageCap.length - 1) {
      setCountCap(0);
    } else {
      setCountCap(countCap + 1);
    }
  }

  return (
    <div>
      <h3 onClick={handleClickCap}>{imageCap[countCap]}</h3>
    </div>
  );
}
