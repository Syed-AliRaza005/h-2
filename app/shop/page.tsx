"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import DATA from "../data/page";

function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="hero w-full h-auto">
        <Image
          src="/images/hero2.svg"
          alt="Hero Image"
          width={1440}
          height={316}
          className="w-full object-cover"
        />
      </div>

      <div className="flex-grow">
        <DATA />
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;
