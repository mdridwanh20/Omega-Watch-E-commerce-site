import React from "react";
import { HeadingH2 } from "../Component/Share/Typography";
import Line from "../Component/Share/Line";

import sampleVideo from "../../assets/watch video/watch video.mp4";
import dentalDoctor from "../../assets/Hero section image/hero image (3).webp";
import { FaPlay } from "react-icons/fa";

export default function SampleVideo() {
  return (
    <div className="py-10 px-4">
      {/* Heading Section */}

      <div className="flex items-center text-center justify-center flex-col pb-10">
        <h2 className="font-bold text-xl lg:text-4xl">
          Experience the Craftsmanship<br />
          <span className="text-[var(--primaryColor)]">Watch Omega in Action</span>
        </h2>
  
      </div>

      {/* Video Thumbnail with Modal Trigger */}
      <div className="max-w-2xl flex items-center justify-center border-8 border-white shadow-xl relative m-auto">
        <img src={dentalDoctor} className="m-1" alt="Omega Watch Preview" />

        <button
          className="animate-ping text-[var(--primaryColor)] text-[30px] lg:text-[80px] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <FaPlay />
        </button>
      </div>

      {/* Video Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-2xl">
          <form method="dialog">
            <button className="btn text-[var(--primaryColor)] btn-sm text-2xl btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* Video Player */}
          <div className="rounded-2xl m-10 overflow-hidden border-4 border-gray-200 shadow-lg">
            <video src={sampleVideo} controls />
          </div>
        </div>
      </dialog>
    </div>
  );
}
