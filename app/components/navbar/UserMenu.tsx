"use client";

import { FC, useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import MenuItem from "./MenuItem";
import { BiGlobe } from "react-icons/bi";

const UserMenu: FC = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  //   const onRent = useCallback(() => {
  //     if (!currentUser) {
  //       return loginModal.onOpen();
  //     }

  //     rentModal.onOpen();
  //   }, [loginModal, rentModal, currentUser]);

  return (
    <div className="relative">
      <div className="md:flex flex-row items-center gap-3 hidden">
        <div
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          ">
          Airdnd your home
        </div>
        <BiGlobe className="cursor-pointer text-lg" />
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md
          transition
          ">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <FaUserCircle className="text-3xl" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          ">
          <div className="flex flex-col cursor-pointer"></div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
