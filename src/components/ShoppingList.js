import React, { useState } from "react";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} value={selectedCategory}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Deli">Deli</option>
        </select>
      </div>
      <ul className="Items">
        {}
        <Item name="Bananas" category="Produce" selectedCategory={selectedCategory} />
        <Item name="Bacon" category="Deli" selectedCategory={selectedCategory} />
        <Item name="Eggs" category="Dairy" selectedCategory={selectedCategory} />
      </ul>
    </div>
  );
}

export default ShoppingList;
