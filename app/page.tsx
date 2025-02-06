import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import DATA from "./data/page";

function page() {
  return (

    <div className="grid  h-screen w-screen ">
      <Header />
      <div className="group115 mt-12 place-items-center w-screen h-auto top-[869px] left-[131px] ">
        <div className="group107 ">

          <h2 className="font-oppins font-bold text-[32px] text-center">Browse The Range</h2>
          <p className="font-poppins font-[400px] text-[20px] text-c1 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="pic w-screen h-auto grid gap-4 mobile:grid-rows-3 md:grid-cols-3 mobile:h-auto justify-between mobile:place-content-center mobile:-center mobile-justify-items-center place-items-center">

            <div className="box1 w-auto h-auto mobile:h-auto mobile:w-screen">
              <Image
                src={"/images/b1.svg"}
                alt="b1"
                width={450}
                height={450} />
              <p className="font-poppins font-semibold text-xl text-center">Dining</p>
            </div>
            <div className="box2 w-auto h-auto mobile:h-auto mobile:w-screen">
              <Image
                src={"/images/b2.svg"}
                alt="b2"
                width={450}
                height={450} />
              <p className="font-poppins font-semibold text-xl text-center">Living</p>
            </div>
            <div className="box3 w-auto h-auto mobile:h-auto mobile:w-screen">
              <Image
                src={"/images/b3.svg"}
                alt="br"
                width={450}
                height={450} />

              <p className="font-poppins font-semibold text-xl text-center">Bedroom</p>
            </div>

          </div>
        </div>


      </div>

      <hr className="w-screen bg-black h-[2px] mt-3" />
      <div>
        <DATA />
      </div>

      {/* ll */}
      <div className="ins w-screen mt-12 h-auto top-[2763px]">


        <div className="bg flex mobile:w-screen mobile:h-auto  mobile:grid-flow-row mobile:grid mobile:grid-rows-2 grid-cols-2 justify-center gap-24 place-items-center text-center w-screen h-auto bg-i1">

          <div className=" grid gap-14 w-auto h-auto bg-blue-400">

            <div className="title left-[100px] top-[2986px] gap-[7px] w-auto h-auto mobile:left-0 mobile:top-0 mobile:p-2">

              <h3 className="font-poppins  w-[422px] mobile:w-auto text-left font-bold text-[40px] text-d2 ">50+ Beautiful rooms
                inspiration</h3>
              <p className="font-poppins w-[368px]  mobile:w-auto  text-left font-[400px] text-base text-i2 ">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            </div>

            <button className="cta hover hover:bg-yellow-400 bg-b1 w-[176px] h-12 left-[100px] ml-10 mobile:ml-10 text-center font-poppins font-semibold text-base">Explor More</button>

          </div>

          <div className="product flex place-items-center bg-blue-800 w-screen h-auto " >

            <div className="image grid w-auto h-auto left-[564px] top-[2807px]">

              <Image
                src={"/images/p1.svg"}
                alt="main pic"
                width={404}
                height={582}
              />

              <div className=" w-[404px] gap-2 h-auto ">

                <div className="content place-items-center w-[404px] h-auto opacity-[72%]  bg-white">

                  <div className="frame flex place-items-center top-[3299px] left-[620px] gap-2 w-auto h-auto ">

                    <p className="w-4 h-6 font-poppins font-medium text-i2 text-base">01</p>
                    <div className="w-[27px] h-[1px] bg-i2 "></div>
                    <p className="w-auto h-auto  font-poppins font-medium text-i2 text-base">Bed Room</p>

                  </div>

                  <p className="font-poppins font-bold  text-[28px] opacity-100 text-d2 top-[3299px] left-[620px]">Inner Peace</p>

                </div>
              </div>
            </div>

            <div className="grid gap-4 m-4">
              <Image src={"/images/ep1.svg"}
                alt=""
                width={372}
                height={486} />

              <div className=" w-auto h-auto">
                <Image src={"/images/ic1.svg"}
                  alt="w"
                  width={120}
                  height={27} />
              </div>

            </div>
          </div>
        </div>

      </div>


      {/* hh */}
      <hr className="w-screen bg-black h-[2px] mt-3" />
      <div className="share w-screen place-items-center mt-12 h-auto ">
        <div className="title text-center w-[356px] h-[86px] gap-2 left-[525px] top-[3500px] ">
          <p className="font-poppins font-semibold text-i2 text-xl">Share your setup with</p>
          <p className="font-poppins font-bold text-d2 text-[40px]">#FuniroFurniture</p>
        </div>
        <Image
          src={"/images/fi1.svg"}
          alt=""
          width={1799}
          height={721} />
      </div>

      <div className="top-[4330px]">

      </div>
      <Footer />

    </div>
  );
}

export default page;