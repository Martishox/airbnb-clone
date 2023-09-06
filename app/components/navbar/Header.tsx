"use client";

import { CldImage } from "next-cloudinary";
import { BiSearch } from "react-icons/bi";
import UserMenu from "./UserMenu";
import Search from "./Search";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white border-b px-5 py-3.5 md:px-10">
      <div className="relative flex items-center my-auto ml-5">
        <div className="flex items-center cursor-pointer">
          <CldImage
            src="Logo_un7vlu"
            alt="logo"
            width="35"
            height="35"
            className="hidden md:inline-flex"
          />
          <CldImage
            src="text_hd2kqa"
            alt="logo"
            width="65"
            height="65"
            className="hidden lg:inline-flex"
          />
        </div>
      </div>

      <Search />

      <div className="flex items-center space-x-4 justify-end text-gray-500 mr-5">
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
