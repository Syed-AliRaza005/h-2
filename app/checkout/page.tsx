// 'use client';
// import { getCartItems } from '@/app/actions/actions';
// import React, { useEffect, useState } from 'react';
// import { Products } from '@/types/products';
// import Link from 'next/link';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import { client } from '@/sanity/lib/client';
// import Swal from 'sweetalert2';
// import { Result } from 'postcss';

// const CheckOut = () => {
//   const [CartItem, setCartItem] = useState<Products[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValue, setFormValue] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address: '',
//     zipCode: '',
//     city: '',
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     email: false,
//     phone: false,
//     address: false,
//     zipCode: false,
//     city: false,
//   });

//   useEffect(() => {
//     setCartItem(getCartItems());
//     const appliedDiscount = localStorage.getItem('appliedDiscount');
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subTotal = CartItem.reduce((total, item) => total + item.price * item.inventory, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValue({
//       ...formValue,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValue.firstName,
//       lastName: !formValue.lastName,
//       email: !formValue.email,
//       phone: !formValue.phone,
//       address: !formValue.address,
//       zipCode: !formValue.zipCode,
//       city: !formValue.city,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };



// const handlePlaceOrder = async () => {
//   if (!validateForm()) {
//     Swal.fire("Error", "Please fill in all required fields", "error");
//     return;
//   }

//   const orderData = {
//     _type: 'order',
//     firstName: formValue.firstName,
//     lastName: formValue.lastName,
//     email: formValue.email,
//     phone: formValue.phone,
//     address: formValue.address,
//     zipCode: formValue.zipCode,
//     city: formValue.city,
//     CartItem: CartItem.map(item => ({
//       _type: "reference",
//       _ref: item._id
//     })),
//     total: subTotal,
//     discount: discount,
//     orderdate: new Date().toISOString(),
//   };

//   try {
//     await client.create(orderData);
//     localStorage.removeItem("appliedOrder");
//   } catch (error) {
//     console.error("Error creating order", error);
//   }

//   Swal.fire({
//     title: "Processing your Order...",
//     text: "Please wait a moment",
//     icon: "info",
//     showCancelButton: true,
//     confirmButtonColor: "green",
//     confirmButtonText: "Proceed",
//     cancelButtonColor: "#d33",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       if (validateForm()) {
//         localStorage.removeItem("appliedDiscount");
//         Swal.fire("Success", "Your order has been successfully processed", "success");
//       }
//     }
//   });
// };

//   return (<div>
//     <Header />
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center py-12">
//       <div className="max-w-4xl w-full bg-white p-10 rounded-lg shadow-2xl flex flex-col md:flex-row gap-10">
//         <div className="w-full md:w-1/2">
//           <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Order Summary</h2>
//           {CartItem.length > 0 ? (
//             CartItem.map((item) => (
//               <div key={item._id} className="flex items-center gap-4 border-b py-4">
//                 {item.productimage && (
//                   <Image
//                     src={urlFor(item.productimage).url()}
//                     alt={item.title}
//                     width={60}
//                     height={60}
//                     className="object-cover rounded-lg shadow-sm"
//                   />
//                 )}
//                 <div>
//                   <h3 className="font-semibold text-lg text-gray-700">{item.title}</h3>
//                   <p className="text-gray-500">Qty: {item.inventory}</p>
//                   <p className="font-semibold text-indigo-600">${item.price * item.inventory}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No items in cart</p>
//           )}

//           <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner">
//             <p className="text-gray-700">Subtotal: <span className="font-bold">${subTotal}</span></p>
//             <p className="text-green-600">Discount: <span className="font-bold">-${discount}</span></p>
//             <p className="text-xl font-bold text-gray-800">Total: ${subTotal - discount}</p>
//           </div>
//         </div>

//         <div className="w-full md:w-1/2">
//           <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Billing Information</h2>
//           {Object.entries(formValue).map(([key, value]) => (
//             <div key={key} className="mb-5">
//               <label className="block text-sm font-semibold text-gray-700 capitalize">{key}</label>
//               <input
//                 type="text"
//                 id={key}
//                 placeholder={`Enter your ${key}`}
//                 value={value}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 shadow-sm"
//               />
//               {formErrors[key as keyof typeof formErrors] && (
//                 <p className="text-red-500 text-sm mt-1">{key} is required</p>
//               )}
//             </div>
//           ))}
//           <button
//             onClick={handlePlaceOrder}
//             className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//     <Footer />
//   </div>
//   );
// };

// export default CheckOut;


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import {  Products } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";



export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Products[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  // const handlePlaceOrder = () => {
  //   if (validateForm()) {
  //     localStorage.removeItem("appliedDiscount");
  //   //   toast.success("Order placed successfully!");
  //   } else {
  //   //   toast.error("Please fill in all the fields.");
  //   }
  // };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire("Error", "Please fill in all required fields", "error");
      return;
    }
  
    const orderData = {
      _type: 'order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      zipCode: formValues.zipCode,
      city: formValues.city,
      cartItems: cartItems.map(item => ({
        _type: "reference",
        _ref: item._id
      })),
      total: total,
      discount: discount,
      orderdate: new Date().toISOString(),
    };
  
    try {
      await client.create(orderData);
      localStorage.removeItem("appliedOrder");
    } catch (error) {
      console.error("Error creating order", error);
    }
  
    Swal.fire({
      title: "Processing your Order...",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "green",
      confirmButtonText: "Proceed",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire("Success", "Your order has been successfully processed", "success");
        }
      }
    });
  };

  
  return (
    <div className={`min-h-screen bg-gray-50`}>
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
     {/* ?       <CgChevronright className="w-4 h-4 text-[#666666]" /> */}
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.productimage && (
                      <Image
                        src={urlFor(item.productimage).url()}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subtotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500">
                    First name is required.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name </label>
                <input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500">
                    Last name is required.
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="address">Address </label>
              <input
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
              />
              {formErrors.city && (
                <p className="text-sm text-red-500">City is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <input
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInputChange}
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500">Zip Code is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500">Phone is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">Email is required.</p>
              )}
            </div>
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}