import React from 'react';
import { HeadingH2 } from '../Component/Share/Typography';

export default function Review() {
  return (
    <div className='py-10'>
        <div className='flex items-center justify-center '>
          <HeadingH2 headH2={'What Our Customers Say'}></HeadingH2>
        </div>

      <div className="flex flex-wrap items-center justify-center gap-6 py-6">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="max-w-80 bg-black text-white rounded-2xl overflow-hidden"
          >
            <div className="relative -mt-px">
              <img
                src={
                  index === 0
                    ? "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600"
                    : index === 1
                    ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600"
                    : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop"
                }
                alt=""
                className="h-[300px] w-full rounded-2xl transition-all duration-300 object-cover object-top"
              />

              <div className="absolute bottom-0  h-50 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
            </div>

            <div className="px-4 pb-4">
              <p className="font-medium border-b border-gray-600 pb-5">
                “The Omega Seamaster is not just a watch—it's a legacy on my wrist.”
              </p>
              <p className="mt-4">— James L.</p>
              <p className="text-sm font-medium text-[var(--primaryColor)]">
                Luxury Collector
              </p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}
