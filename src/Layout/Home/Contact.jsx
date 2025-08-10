import React from "react";
import { Btn, HeadingH2, HeadingH3, Para } from "../Component/Share/Typography";

export default function Contact() {
  return (
    <div id="contact" className="relative mt-10 scroll-mt-15 ">

      <form className="flex flex-col text-[var(--deepColor)] items-center text-sm py-16 px-4 sm:px-6 md:px-12 lg:px-20 ">
        
        {/* Heading Section */}
        <div className="flex flex-col lg:items-center lg:text-center max-w-3xl space-y-2">
          <HeadingH2 headH2="Contact Us" className="text-[var(--primaryColor)]" />
          <HeadingH3 head3="Get in Touch with Our Team" />
          <Para
            para="Have questions about our fitness programs, personal training, or memberships? We're here to help you start or continue your fitness journey with confidence."
            className="lg:text-center"
          />
        </div>

        {/* Input Row */}
        <div className="flex flex-col md:flex-row  gap-6 w-full max-w-3xl mt-10">

          <div className="w-full">
            <label htmlFor="name" className="block mb-1">Your Name</label>
            <input
              id="name"
              type="text"
              required
              placeholder="Please write your name"
              className="h-12 p-3 w-full border border-[var(--primaryColor)] rounded outline-none "
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block mb-1">Your Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Please write your email"
              className="h-12 p-3 w-full border border-[var(--primaryColor)] rounded outline-none  "
            />
          </div>

        </div>

        {/* Message Field */}
        <div className="mt-6 w-full max-w-3xl">
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea
            id="message"
            required
            placeholder="Please Write your message"
            className="w-full p-3 h-20 border border-[var(--primaryColor)] rounded resize-none outline-none  "
          ></textarea>

        </div>

        {/* Button */}
        <div className="py-7 w-full flex items-center justify-center">
          <Btn btn="Send Message" className={'bg-[var(--primaryColor)]  text-white! '}/>
        </div>

      </form>
    </div>
  );
}
