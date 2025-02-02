'use client';
import { getCartItems } from '@/app/actions/actions';
import React, { useEffect, useState } from 'react';
import { Products } from '@/types/products';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Header from '../components/header';
import Footer from '../components/footer';

const CheckOut = () => {
  const [CartItem, setCartItem] = useState<Products[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItem(getCartItems());
    const appliedDiscount = localStorage.getItem('appliedDiscount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = CartItem.reduce((total, item) => total + item.price * item.inventory, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValue.firstName,
      lastName: !formValue.lastName,
      email: !formValue.email,
      phone: !formValue.phone,
      address: !formValue.address,
      zipCode: !formValue.zipCode,
      city: !formValue.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem('appliedDiscount');
    }
  };

  return (<div>
    <Header/>
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center py-12">
      <div className="max-w-4xl w-full bg-white p-10 rounded-lg shadow-2xl flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Order Summary</h2>
          {CartItem.length > 0 ? (
            CartItem.map((item) => (
              <div key={item._id} className="flex items-center gap-4 border-b py-4">
                {item.productimage && (
                  <Image
                    src={urlFor(item.productimage).url()}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover rounded-lg shadow-sm"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-lg text-gray-700">{item.title}</h3>
                  <p className="text-gray-500">Qty: {item.inventory}</p>
                  <p className="font-semibold text-indigo-600">${item.price * item.inventory}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in cart</p>
          )}

          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner">
            <p className="text-gray-700">Subtotal: <span className="font-bold">${subTotal}</span></p>
            <p className="text-green-600">Discount: <span className="font-bold">-${discount}</span></p>
            <p className="text-xl font-bold text-gray-800">Total: ${subTotal - discount}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Billing Information</h2>
          {Object.entries(formValue).map(([key, value]) => (
            <div key={key} className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 capitalize">{key}</label>
              <input
                type="text"
                id={key}
                placeholder={`Enter your ${key}`}
                value={value}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 shadow-sm"
              />
              {formErrors[key as keyof typeof formErrors] && (
                <p className="text-red-500 text-sm mt-1">{key} is required</p>
              )}
            </div>
          ))}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CheckOut;
