
import Header from "@/app/components/header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Products } from "@/types/products";
import Footer from "@/app/components/footer";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import ButtonCart from "@/app/components/button";
interface ProductPageProps {
    params: Promise<{ slug: string }>;
}
async function getProduct(slug: string): Promise<Products | null> {
    return client.fetch(
        groq`*[_type=="product" && slug.current==$slug][0] {title, description, price, productimage, discountPercentage, tags, isNew}`,
        { slug }
    );

}
export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);
    //   const  handleAddToCart = (e: React.MouseEvent, product: Products) => {
    //     e.preventDefault();
    //     Swal.fire({
    //       position: "top-right",
    //       icon: "success",
    //       title: `${product.title} added to cart`,
    //       showConfirmButton: false,
    //       timer: 1000,
    //     });
    //     addToCart(product);
       
    //   };
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-center font-extrabold text-4xl text-gray-800 mb-6">
                    Product Details of "{product?.title}"
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {product?.productimage && (
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
                            Product Name: {product?.title}
                        </h2>
                        <p className="text-xl text-gray-700 font-medium">
                            Price: ${product?.price.toFixed(2)}
                        </p>
                        <p className="text-xl text-gray-700 font-medium">
                            Discount: {product?.discountPercentage}%
                        </p>
                        <p className="text-gray-700">
                            {product?.isNew && "This is a new product!"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tags:</h3>
                            {product?.tags?.map((tag, index) => (
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
                    <p className="text-gray-700 text-base">{product?.description}</p>
                  {/* <button
                      className="mt-4 w-full py-2 px-4 text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 focus:outline-none"
                      onClick={(e) => handleAddToCart(e, product )}
                    >
                      Add To Cart
                    </button> */}
                    <div className="mt-4 w-full py-2 px-4 text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 focus:outline-none"
                    >
                   <ButtonCart /></div>
 </div>
                <hr className="my-8 border-gray-300" />

                <Footer />
            </div>
        </div>
    );
}