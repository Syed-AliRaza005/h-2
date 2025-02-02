import React from "react";
import Image from "next/image";

function Wr() {
  return (
    <div className="flex w-screen h-auto bg-w1 py-12">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full px-4 sm:px-8 lg:px-16">
        {/* Box 1 */}
        <div className="flex items-center gap-4">
          <Image src="/images/w1.svg" alt="High Quality" width={60} height={60} />
          <div>
            <p className="font-poppins font-semibold text-xl lg:text-2xl text-w3">High Quality</p>
            <p className="font-poppins font-medium text-base lg:text-lg text-w2">
              Crafted from top materials
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex items-center gap-4">
          <Image src="/images/w2.svg" alt="Warranty Protection" width={60} height={60} />
          <div>
            <p className="font-poppins font-semibold text-xl lg:text-2xl text-w3">
              Warranty Protection
            </p>
            <p className="font-poppins font-medium text-base lg:text-lg text-w2">Over 2 years</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex items-center gap-4">
          <Image src="/images/w3.svg" alt="Free Shipping" width={60} height={60} />
          <div>
            <p className="font-poppins font-semibold text-xl lg:text-2xl text-w3">Free Shipping</p>
            <p className="font-poppins font-medium text-base lg:text-lg text-w2">
              Orders over $150
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="flex items-center gap-4">
          <Image src="/images/w4.svg" alt="24/7 Support" width={60} height={60} />
          <div>
            <p className="font-poppins font-semibold text-xl lg:text-2xl text-w3">24 / 7 Support</p>
            <p className="font-poppins font-medium text-base lg:text-lg text-w2">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wr;
