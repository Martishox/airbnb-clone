"use client";

import Header from "@/app/components/navbar/Header";
import Filters from "@/app/components/Filters";
import HousingContent from "@/app/components/HousingContent";
import Map from "@/app/components/Map";
import { useState } from "react";
import { HiMap } from "react-icons/hi";
import { FaListUl } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mapVisible, setMapVisible] = useState(false);
  //sorting.length > 0 ? sorting[0].title : ""

  const toggleMapVisibility = () => {
    setMapVisible((prevVisible) => !prevVisible);
  };

  return (
    <main>
      <Header />
      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex justify-center text-gray-400 fixed z-50 bottom-0 left-0 right-0 md:hidden bg-white py-3 border-t">
        <div className="flex items-center justify-evenly mx-auto w-96">
          <div className="flex flex-col items-center">
            <AiOutlineSearch className="text-3xl" />
            <span className="text-xs font-semibold mt-2">
              Explore
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FiHeart className="text-3xl" />
            <span className="text-xs font-semibold mt-2">
              Wishlists
            </span>
          </div>
          <div className="flex flex-col items-center">
            <PiUserCircle className="text-3xl" />
            <span className="text-xs font-semibold mt-2">Log in</span>
          </div>
        </div>
      </div>
      <div className="hidden fixed z-50 bottom-0 left-0 right-0 md:flex justify-center pb-20">
        <button
          onClick={toggleMapVisibility}
          className=" bg-[#222222] text-white py-3.5 px-5 rounded-full mr-2 transition duration-500 hover:scale-105 hover:shadow-lg">
          {mapVisible ? (
            <div className="flex items-center">
              <span className="text-sm">Show List</span>
              <FaListUl className="ml-2 text-md" />
            </div>
          ) : (
            <div className="flex items-center">
              <span className="text-sm">Show Map</span>
              <HiMap className="ml-2 text-md" />
            </div>
          )}
        </button>
      </div>

      {mapVisible ? (
        <Map selectedCategory={selectedCategory} />
      ) : (
        <HousingContent selectedCategory={selectedCategory} />
      )}
    </main>
  );
};

export default Main;
