import React from 'react';
import { HeadingH2, HeadingH3, Para } from './Typography';

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-[var(--cardBodyColor)]">
      {/* Top Footer Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        
        {/* Left Side: Logo and About */}
        <div className="md:max-w-md">
          <HeadingH2 headH2="Omega Watch" className="text-[var(--primaryColor)]" />
          <Para para="A legacy of precision, craftsmanship, and timeless elegance. Discover watches that redefine time itself." />
        </div>

        {/* Right Side: Links and Newsletter */}
        <div className="flex-1 flex flex-col md:flex-row md:justify-end gap-10">
          
          {/* Company Links */}
          <div>
            <HeadingH3 head3="Explore" className="pb-2" />
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">About </a></li>
              <li><a href="#" className="hover:text-gray-900">Collections</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy </a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-md w-full">
            <HeadingH3 head3="Stay Updated" className="pb-2" />
            <div className="text-sm space-y-2">
              <p>Join our mailing list to receive the latest releases, exclusive offers, and stories behind Omega timepieces.</p>

              {/* Input + Button Layout */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 text-gray-200 border border-[var(--primaryColor)] placeholder-gray-400 outline-none h-9 rounded px-2 w-full py-3 sm:max-w-[240px]"
                />
                
                <button className="bg-[var(--primaryColor)] text-white font-semibold px-4 h-9 rounded w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        &copy; 2025 Omega Watches. All Rights Reserved.
      </p>
    </footer>
  );
}
