'use client'
import React, { useState } from "react";
import { Products } from "@/types/products"; // Assuming you have this type defined

interface SearchProps {
  products: Products[];
  setFilteredProducts: (products: Products[]) => void;
}

const Search: React.FC<SearchProps> = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to apply search filter
  const applySearchFilter = (query: string) => {
    let filtered = [...products];

    if (query) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredProducts(filtered); // Update the filtered products list
  };

  // Handle search input change
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applySearchFilter(searchQuery); // Apply the search filter
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search for products..."
        className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/2"
      />
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default Search;
