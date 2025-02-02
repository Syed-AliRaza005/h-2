import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Wr from "../components/wr";
import Image from "next/image";
function blog() {
  return (
    <div>
      <Header />
      <div className="hero w-screen h-auto">
        <Image className="object-cover"
          src={"/images/blog.svg"}
          alt=""
          width={1440}
          height={316} />

      </div>

      <div className="grid place-items-center w-screen h-auto gap-12 justify-between mt-12">



        <Wr />
      </div>
      <Footer />
    </div>
  );
}

export default blog;
