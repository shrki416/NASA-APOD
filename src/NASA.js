import React from "react";

function NASA({ copyright, date, title, image, explanation }) {
  return (
    <div>
      <p>{copyright}</p>
      <p>{date}</p>
      <p>{title}</p>
      <img src={image} alt={image} />
      <p>{explanation}</p>
    </div>
  );
}

export default NASA;
