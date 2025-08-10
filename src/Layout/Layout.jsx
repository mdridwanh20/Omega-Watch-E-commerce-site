import Top_Navbar from "./Component/Share/Top_Navbar";
import Navbar from "./Component/Share/Navbar";
import HeroSection from "./Home/HeroSection";
import Contact from "./Home/Contact";
import Footer from "./Component/Share/Footer";

import Review from "./Home/Review";
import About from "./Home/About";
import SampleVideo from "./Home/SampleVideo";
import Shop from "./Home/Shop";
import Faq from "./Home/Faq";


export default function Layout() {
  return (
    <div>
      <div className="w-full bg-white relative text-gray-800">
        {/* Concentric Squares - Light Pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      `,
          }}
        />

        {/* content here */}

        <div className="relative z-[2]">
          <div>
            <Top_Navbar></Top_Navbar>
          </div>

          <div className="mt-11 ">
            <Navbar></Navbar>
          </div>

          <div>
            <HeroSection></HeroSection>
          </div>

          <div className="container m-auto px-4 pb-16">

            <Shop></Shop>

            <About></About>

            <Review></Review>

            <SampleVideo></SampleVideo>

            <Faq></Faq>

            <Contact></Contact>

            <Footer></Footer>
          </div>

        </div>
      </div>
    </div>
  );
}

{
  /* content here */
}

