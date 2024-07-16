import React from "react";
import LogoGmim from "../assets/img/logoGmim.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="header header-expand-md flex items-center justify-center top-0 z-50 px-4 py-3 bg-ungu1">
        <div className="flex items-center poppins-semibold gap-2">
          <Image src={LogoGmim} alt="" className="w-14 h-14 rounded-[30px]" />
          <h1 className="text-white">GMIM EBEN HAEZER TUMPAAN 1</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
