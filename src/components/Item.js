import React, { useState } from "react";

function Item({ name, category, selectedCategory }) {
  const [isInCart, setInCart] = useState(false);

  const handleButtonClick = () => {
    setInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleButtonClick}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
