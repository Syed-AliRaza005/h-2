"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Wr from "../components/wr";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="w-screen h-auto">
        <Image
          className="object-cover w-full"
          src="/images/c2.svg"
          alt="Contact Hero"
          width={1440}
          height={316}
        />
      </div>

      {/* Main Content */}
      <div className="grid place-items-center w-screen h-auto gap-12 mt-12 px-4 sm:px-8 lg:px-16">
        {/* Contact Info Section */}
        <div className="w-full max-w-5xl bg-white text-center py-12 px-6 rounded-lg shadow-sm">
          <p className="font-semibold text-2xl lg:text-3xl leading-snug">
            Get In Touch With Us
          </p>
          <p className="font-normal text-base lg:text-lg text-c1 mt-4">
            For more information about our products & services, feel free to drop us an email.
            Our staff is always here to help you. Do not hesitate!
          </p>

          {/* Contact Details and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Contact Details */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <Image src="/images/l.svg" alt="Address Icon" width={22} height={28} />
                <div>
                  <p className="font-medium text-lg lg:text-xl">Address</p>
                  <p className="text-sm lg:text-base text-c1">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Image src="/images/l2.svg" alt="Phone Icon" width={22} height={28} />
                <div>
                  <p className="font-medium text-lg lg:text-xl">Phone</p>
                  <p className="text-sm lg:text-base text-c1">
                    Mobile: +(84) 546-6789 <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
              {/* Working Time */}
              <div className="flex items-start gap-4">
                <Image src="/images/l3.svg" alt="Working Time Icon" width={22} height={28} />
                <div>
                  <p className="font-medium text-lg lg:text-xl">Working Time</p>
                  <p className="text-sm lg:text-base text-c1">
                    Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block font-medium text-sm lg:text-base mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-c1 rounded-lg px-4 py-2"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Input */}
              <div>
                <label className="block font-medium text-sm lg:text-base mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-c1 rounded-lg px-4 py-2"
                  placeholder="Enter your email"
                />
              </div>
              {/* Subject Input */}
              <div>
                <label className="block font-medium text-sm lg:text-base mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full border border-c1 rounded-lg px-4 py-2"
                  placeholder="Subject (optional)"
                />
              </div>
              {/* Message Input */}
              <div>
                <label className="block font-medium text-sm lg:text-base mb-2">Message</label>
                <textarea
                  className="w-full border border-c1 rounded-lg px-4 py-2"
                  rows={4}
                  placeholder="Type your message here"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button className="w-full py-3 bg-b1 text-white font-medium rounded-lg hover:bg-yellow-700 transition">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <Wr />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
