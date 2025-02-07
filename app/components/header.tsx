'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";


function Header() {
  return (
    <header className="w-full bg-slate-300 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-[100px] px-4">
     
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Image src="/images/logo.svg" alt="logo" width={50} height={32} />
            <p className="text-2xl font-bold">AR MART</p>
          </div>
        </Link>
      
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-black font-medium">
            Shop
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-black font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black font-medium">
            Contact
          </Link>
        </nav>

   
        <div className="flex items-center space-x-4">
    
          <Image src="/images/box1.svg" alt="profile" width={24} height={24} />
          <Image src="/images/box2.svg" alt="search" width={24} height={24} className="md:hidden" />
          <Image src="/images/box3.svg" alt="wishlist" width={24} height={24} />
          <Link href="/cart">
            <Image src="/images/box4.svg" alt="cart" width={24} height={24} />
          </Link>
        </div>
      </div>

      <div className="md:hidden bg-white py-4 px-4">
        <div className="flex justify-between items-center">
          <button           >
            Search
          </button>
          <Image src="/images/box2.svg" alt="search-icon" width={24} height={24} />
        </div>
        <nav className="mt-4 flex flex-wrap justify-between gap-4">
          <Link href="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-black font-medium">
            Shop
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-black font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black font-medium">
            Contact
          </Link>
        </nav>
      
      </div>
    </header>
  );
}

export default Header;
