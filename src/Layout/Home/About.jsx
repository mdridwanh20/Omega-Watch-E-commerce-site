import React from "react";
import img from '../../assets/About us/about img.webp'


import { Btn, HeadingH2, HeadingH3, Para } from "../Component/Share/Typography";

const About = () => {
  const aboutPoints = [
    {
      title: "Timeless Craftsmanship",
      description: "Each Omega watch is crafted with precision, blending heritage and innovation.",
    },
    {
      title: "Swiss Excellence",
      description: "Built in Switzerland using the finest materials and cutting-edge horology.",
    },
    {
      title: "Iconic Legacy",
      description: "From the Moon landing to James Bond, Omega is a symbol of elite performance.",
    },
  ];

  const collageImages = [img];

  return (

    <section id="about" className="px-4 scroll-mt-20 py-10 ">
      
      {/* Heading */}
      <div className="text-center mb-3">
        <HeadingH2 headH2="About Omega" />
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

        {/* Image collage */}
        <div className=" ">

          {collageImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Omega Watch ${index + 1}`}
              className="rounded-lg shadow-md object-cover "
            />
          ))}
        </div>

        {/* Text content */}
        <div className="">

          <HeadingH3 head3="Precision Timepieces Since 1848" />

          <Para para="For over 175 years, Omega has been at the forefront of watchmaking innovation. From pioneering diving watches to landing on the moon, our heritage reflects unmatched precision and bold design." />

          <Para para="Every Omega timepiece combines cutting-edge technology with a timeless aesthetic—offering reliability, performance, and luxury for those who value excellence in every second." />

          <p className="text-[var(--paraColor)] mb-6 leading-relaxed">
            <strong>Why enthusiasts choose Omega:</strong>
          </p>

          <ul className="list-disc list-inside text-[var(--paraColor)] mb-6 space-y-2">
            {aboutPoints.map((pt, i) => (
              <div key={i}>
                <strong>{pt.title}</strong> 
                <p>{pt.description}</p>
              </div>

            ))}
          </ul>

          <Btn btn="Discover the Collection" />

        </div>

      </div>





    </section>
  );
};



export default About;
