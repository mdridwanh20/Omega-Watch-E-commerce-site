import React from 'react';
import { HeadingH2 } from '../Component/Share/Typography';

export default function Shop() {
  const cardData = [
    {
      price: "$29.00",
      name: "Chris Jordan",
      description: "Looks amazing out of the box.",
      imageUrl: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
    },
    {
      price: "$39.00",
      name: "Taylor Swift",
      description: "Absolutely fabulous design.",
      imageUrl: "https://watchwired.com/wp-content/uploads/2023/09/Omega-Watch-5-1024x585.jpg"
    },
    {
      price: "$49.00",
      name: "Sam Smith",
      description: "Stylish and comfortable.",
      imageUrl: "https://precisionwatches.com/wp-content/uploads/2018/04/vintage-omega.jpg"
    },
    {
      price: "$59.00",
      name: "Alex Johnson",
      description: "Premium quality, lasts long.",
      imageUrl: "https://tse4.mm.bing.net/th/id/OIP.iapDLCmxJ0w4MFJCtekS8wAAAA?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
  ];

  return (
    <div id='shop' className="flex scroll-mt-20 py-10 flex-col justify-center">

        <div className='pb-1 pt-5 flex items-center justify-center '>
            <HeadingH2 headH2={'Shop Now'}></HeadingH2>
        </div>

      <div className='grid grid-cols-1 gap-5 lg:grid-cols-4'>
        {cardData.map((item, idx) => (

        <div key={idx} className="grid grid-col-4 bg-white shadow-lg m-2">

          <img
            className="w-72 h-48 object-cover"
            src={item.imageUrl}
            alt={item.name}
          />
          <div className="p-4 text-sm">
            <p className="text-slate-600">{item.price}</p>
            <p className="text-slate-800 text-base font-medium my-1.5">
              {item.name}
            </p>
            <p className="text-slate-500">{item.description}</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <button className="bg-slate-100 text-slate-600 py-2">Add to cart</button>
              <button className="bg-[var(--primaryColor)] text-white py-2">Buy now</button>
            </div>
          </div>
        </div>

      ))}

      </div>
    </div>
  );
}
