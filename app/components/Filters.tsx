"use client";

import Filter from "@/app/components/Filter";
import { GiSurfBoard } from "react-icons/gi";
import { GiWoodCabin } from "react-icons/gi";
import { GiTreehouse } from "react-icons/gi";
import { GiForestCamp } from "react-icons/gi";
import { GiHabitatDome } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { GiIsland } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { PiMountains } from "react-icons/pi";
import { MdOutlineHouse } from "react-icons/md";
import { VscFlame } from "react-icons/vsc";
import { TbUfo } from "react-icons/tb";
import { PiCactus } from "react-icons/pi";
import { HiOutlineKey } from "react-icons/hi";
import { BsFilter } from "react-icons/bs";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { Dispatch, FC, SetStateAction, useState } from "react";
//import Modal from "@/app/components/modals/Modal";

interface IFilters {
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
}

const Filters: FC<IFilters> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [scrolling, setScrolling] = useState(false);

  const sorting = [
    {
      title: "Amazing views",
      icon: <PiMountains />,
      category: "amazing_views",
    },
    {
      title: "Tiny homes",
      icon: <MdOutlineHouse />,
      category: "tiny_homes",
    },
    { title: "Beach", icon: <FaUmbrellaBeach />, category: "beach" },
    { title: "Surfing", icon: <GiSurfBoard />, category: "surfing" },
    { title: "Cabins", icon: <GiWoodCabin />, category: "cabins" },
    {
      title: "Amazing pools",
      icon: <FaSwimmingPool />,
      category: "amazing_pools",
    },
    {
      title: "Treehouse",
      icon: <GiTreehouse />,
      category: "treehouse",
    },
    { title: "OMG!", icon: <TbUfo />, category: "omg" },
    { title: "Trending", icon: <VscFlame />, category: "trending" },
    { title: "Camping", icon: <GiForestCamp />, category: "camping" },
    { title: "Islands", icon: <GiIsland />, category: "islands" },
    { title: "Domes", icon: <GiHabitatDome />, category: "domes" },
    { title: "Tropical", icon: <GiPalmTree />, category: "tropical" },
    { title: "Desert", icon: <PiCactus />, category: "desert" },
    {
      title: "Mansions",
      icon: <GiFamilyHouse />,
      category: "mansions",
    },
    {
      title: "Countryside",
      icon: <GiMountainRoad />,
      category: "countryside",
    },
    { title: "New", icon: <HiOutlineKey />, category: "new" },
  ];

  const handleSelectCategory = (element: string) => {
    setSelectedCategory(element);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="sticky top-[65px] z-40 bg-white pt-2.5 h-[rem]">
        <div className="flex justify-start items-center mt-5 ml-5">
          <div className="flex gap-4 px-5 md:px-10 overflow-x-scroll no-scrollbar">
            {sorting.map((e, index) => (
              <Filter
                key={`icon-item-${index}`}
                title={e.title}
                icon={e.icon}
                onClick={() => handleSelectCategory(e?.category)}
                isSelected={selectedCategory === e?.category}
              />
            ))}
            <button onClick={openModal}>Open Modal</button>
            {/* {isOpen && (
              <Modal onClose={closeModal}>
                <h2>Modal Content</h2>
                <p>This is the content of the modal.</p>
              </Modal>
            )} */}
          </div>

          <div className="flex items-center justify-end mr-5">
            {/* <TfiArrowCircleRight className="mr-5 text-2xl" /> */}
            <button className="flex items-center border rounded-lg p-3">
              <BsFilter />
              Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
