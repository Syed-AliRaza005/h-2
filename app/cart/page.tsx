
"use client";
import React, { useEffect, useState } from "react";
import { Products } from "@/types/products";
import Swal from "sweetalert2";
import { removeFromCart, updateCartQuantity, getCartItems } from "../actions/actions";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";
import CheckOut from "../checkout/page";
const CartPage = () => {
  const [CartItem, setCartItem] = useState<Products[]>([]);

  useEffect(() => {
    setCartItem(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      position: "top-right",
      icon: "warning",
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      showCancelButton: true,
      confirmButtonText: "Yes, remove this",
      confirmButtonColor: "yellow",
      cancelButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItem(getCartItems());
        Swal.fire("Removed", "Item has been removed from cart.", "success");
      }
    });
  };

  
  const handleIncrease = (id: string) => {
    setCartItem((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === id ? { ...item, inventory: (item.inventory || 1) + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  
  const handleDecrease = (id: string) => {
    setCartItem((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === id && item.inventory > 1
          ? { ...item, inventory: item.inventory - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  

  const handleQuantity = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItem(getCartItems());
  };


  const calculatedTotal = () => {
    return CartItem.reduce(
      (total, item) => total + (Number(item.price) || 0) * (item.inventory || 1),
      0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "green",
      confirmButtonText: "Yes, proceed",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed.", "success");
    
        setCartItem([]);
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-2 items-center">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
        <Link href={"/checkout"} className="w-max py-3 col-span-1 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600">checkout</Link>
</div>
        {CartItem.length > 0 ? (
          <div className="space-y-4">
            {CartItem.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
             
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrease(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded-lg"
                  >
                    -
                  </button>
                  <span>{item.inventory}</span>
                  <button
                    onClick={() => handleIncrease(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded-lg"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6 p-4 bg-white rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold">Total:</h2>
              <p className="text-xl font-bold">${calculatedTotal().toFixed(2)}</p>
            </div>

            <button
              onClick={handleProceed}
              className="w-full py-3 mt-4 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600"
            >
              Proceed to Checkout
            </button>

          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
