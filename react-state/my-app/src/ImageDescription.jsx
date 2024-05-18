import React, { useState } from 'react';

export function ImageDescription({ imageDescrip }) {
  let [countDesc, setCountDesc] = useState(0);

  function handleClickDesc() {
    if (countDesc >= imageDescrip.length - 1) {
      setCountDesc(0);
    } else {
      setCountDesc(countDesc + 1);
    }
  }

  return (
    <div>
      <p onClick={handleClickDesc}>{imageDescrip[countDesc]}</p>
    </div>
  );
}
