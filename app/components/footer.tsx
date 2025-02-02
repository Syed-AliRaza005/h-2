
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-white py-12">
 
      <div className="container mx-auto px-4 grid gap-12">
   
        <div className="grid gap-8 sm:grid-cols-3">
    
          <div>
            <h1 className="text-2xl font-bold mb-4">Funiro</h1>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

        
          <div>
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h2 className="text-lg font-semibold mb-4">Help</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">Payment Options</li>
              <li className="text-gray-600">Returns</li>
              <li className="text-gray-600">Privacy Policies</li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-gray-300 pt-8">
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <div className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow p-3 border border-gray-300 rounded-lg"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4 text-center">
          <p className="text-gray-600">© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
