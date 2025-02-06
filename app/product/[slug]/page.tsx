"use client";
import React, { useState, useEffect } from "react";
import { Products } from "@/types/products";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function SlugPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Products | null>(null);
  const [cart, setCart] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await client.fetch(
        groq`*[_type=="product" && slug.current==$slug][0] {title, description, price, productimage, discountPercentage, tags, isNew}`,
        { slug: params.slug }
      );
      setProduct(result);
    };
    fetchProduct();
  }, [params.slug]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = (product: Products) => {
    if (!product.price || isNaN(product.price)) {
      Swal.fire({
        position: "top-right",
        icon: "error",
        title: "Error adding product",
        text: "Product price is invalid",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      Swal.fire({
        position: "top-right",
        icon: "error",
        title: "Product already in cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const updatedCart = [
        ...cart,
        { ...product, price: Number(product.price), inventory: 1 }, // Add quantity
      ];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Added to Cart",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>

      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-center font-extrabold text-4xl text-gray-800 mb-6">
            Product Details of "{product.title}"
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {product.productimage && (
              <Image
                className="w-full h-full object-cover rounded-lg shadow-md"
                src={urlFor(product.productimage).url()}
                alt={product.title}
                width={400}
                height={400}
              />
            )}

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Product Name: {product.title}
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Price: ${product.price.toFixed(2)}
              </p>
              <p className="text-xl text-gray-700 font-medium">
                Discount: {product.discountPercentage}%
              </p>
              <p className="text-gray-700">
                {product.isNew && "This is a new product!"}
              </p>
              <div className="flex flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tags:</h3>
                {product.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-200 text-purple-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Description:</h3>
            <p className="text-gray-700 text-base">{product.description}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Add to Cart
            </button>

          </div>
          <hr className="my-8 border-gray-300" />
          <Footer />
        </div>
      </div>

    </div>
  );
}