"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import SkeletonLoader from "../components/SkeletonLoader";
import { Products } from "@/types/products";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Filter from "../components/Filter";

const DATA = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(allproducts);
        setProducts(response);
        setFilteredProducts(response);
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Products) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* 🔹 Filter & Sorting Section */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center text-lg font-semibold text-gray-800 hover:text-purple-600 border border-gray-300 px-4 py-2 rounded-lg shadow-md bg-white"
        >
          <span className="mr-2">🔍</span> Open Filters
        </button>

        <div className="text-gray-700">
          Showing {filteredProducts.length} of {products.length} results
        </div>
      </div>
      {isFilterOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96 transition-all transform scale-95 animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800">Filter Products</h2>
            <Filter products={products} setFilteredProducts={setFilteredProducts} />
            <button
              onClick={() => setIsFilterOpen(false)}
              className="mt-4 w-full py-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Close Filters
            </button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
        </div>
      ) : error ? (
        <div className="text-center mt-6 text-red-500">
          <p className="text-2xl font-bold">Failed to load products.</p>
          <p className="text-lg">Please try again later.</p>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/product/${product?.slug?.current || ""}`}>
                  <div>
                    {product.productimage && (
                      <Image
                        className="w-full h-48 object-cover rounded-t-lg"
                        src={urlFor(product.productimage).url()}
                        alt={product.title}
                        width={400}
                        height={400}
                      />
                    )}

                    <div className="p-4">
                      <h2 className="text-lg font-bold text-gray-800">
                        {product.title}
                      </h2>
                      <p className="text-gray-600 font-medium text-base">
                        ${product.price}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {product.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      {product.isNew && (
                        <p className="text-sm text-green-500 font-semibold mt-2">
                          New Arrival
                        </p>
                      )}

                      <button
                        className="mt-4 w-full py-2 px-4 text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 focus:outline-none"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DATA;
