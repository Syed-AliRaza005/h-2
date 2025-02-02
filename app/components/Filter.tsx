import React, { useState } from "react";
import { Products } from "@/types/products";

interface FilterProps {
  products: Products[];
  setFilteredProducts: (products: Products[]) => void;
}

const Filter: React.FC<FilterProps> = ({ products, setFilteredProducts }) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [isNew, setIsNew] = useState(false);

  // Generate unique tags from the products list
  const tags = Array.from(new Set(products.flatMap((product) => product.tags)));

  // Function that applies all filters
  const applyFilters = (tag: string, price: [number, number], newOnly: boolean) => {
    let filtered = [...products];

    // Filter by selected tag
    if (tag) {
      filtered = filtered.filter((product) => product.tags.includes(tag));
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) => product.price >= price[0] && product.price <= price[1]
    );

    // Filter by new arrivals flag
    if (newOnly) {
      filtered = filtered.filter((product) => product.isNew);
    }

    setFilteredProducts(filtered); // Update the filtered products
  };

  // Function to handle manual filter application
  const handleFilter = () => {
    applyFilters(selectedTag, priceRange, isNew);
  };

  // "Clear All" functionality to reset filters
  const clearFilters = () => {
    setSelectedTag("");
    setPriceRange([0, 1000]);
    setIsNew(false);
    setFilteredProducts(products); // Reset to all products
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
      {/* 💰 Price Range */}
      <div>
        <label className="font-semibold">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full"
        />
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full"
        />
      </div>

      {/* 🏷️ Tags Dropdown */}
      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg w-full"
      >
        <option value="">All Tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* 🌟 New Arrival Checkbox */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isNew}
          onChange={(e) => setIsNew(e.target.checked)}
          className="w-5 h-5"
        />
        <span>New Arrivals Only</span>
      </label>

      {/* 🎯 Buttons: Apply & Clear Filters */}
      <div className="flex space-x-4">
        <button
          onClick={handleFilter}
          className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
        >
          Apply Filters
        </button>
        <button
          onClick={clearFilters}
          className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Filter;
