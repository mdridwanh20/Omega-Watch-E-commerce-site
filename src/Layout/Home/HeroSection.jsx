import { Btn } from "../Component/Share/Typography";
import img1 from "../../assets/Hero section image/hero image (1).webp";
import img2 from "../../assets/Hero section image/hero image (2).webp";
import img3 from "../../assets/Hero section image/hero image (3).webp";
import img4 from "../../assets/Hero section image/hero image (4).webp";


export default function HeroSection() {
  const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

  return (
    <div className="min-h-screen lg:flex items-center justify-between px-6 lg:px-20 pt-40">

      {/* Left Content */}
      <div className="max-w-xl space-y-4">
        <h1 className="text-xl lg:text-4xl font-bold text-[var(--deepColor)] leading-tight">
          Timeless Elegance with the <br />{" "}
          <span className="text-[var(--primaryColor)]">Omega Watch</span>
        </h1>

        <p className="text-sm text-[var(--paraColor)]">
          Discover the perfect blend of precision, craftsmanship, and luxury.
          The Omega Watch is a statement of style and performance, trusted by
          explorers, athletes, and innovators worldwide.
        </p>

        <Btn btn={"shop now"}></Btn>
      </div>

      {/* Right Image */}
      <div className="lg:mt-0 mt-8 grid grid-cols-2 gap-5">

        {images.map((item) => (
          <div>
            <img className="lg:w-40 w-full border-gray-200 h-30 bg-white lg:h-40 p-3 border rounded-md shadow-md object-cover" src={item.img} alt="" />
          </div>
        ))}

      </div>

    </div>
  );
}
