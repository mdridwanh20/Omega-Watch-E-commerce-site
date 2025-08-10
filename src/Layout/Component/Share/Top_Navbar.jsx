import React from "react";
import { FaFacebook, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const Top_Navbar = () => {
  const phone = "01876258020";
  const messengerLink = "https://www.facebook.com/ridwanulhoque231";
  const facebookPageLink = "https://www.facebook.com/ridwanulhoque231";

  return (
    <nav className="bg-[var(--lightColor)] border-b border-[var(--borderColor)] z-20 py-3 fixed w-full top-0">
      <div className="container flex justify-between items-center px-3 m-auto text-[var(--deepColor)]">
        
        {/* Phone Section */}
        <div className="flex items-center gap-2 text-xl">
          <FaWhatsapp className="text-[#25D366]" />
          <a href={`tel:${phone}`} className="font-semibold text-[var(--primaryColor)]">
            {phone}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-xl">
          <a href={messengerLink} target="_blank" rel="noopener noreferrer">
            <FaFacebookMessenger className="text-[#0084FF]" />
          </a>
          <a href={facebookPageLink} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-[#1877F2]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Top_Navbar;
