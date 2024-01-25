"use client";
import React, { useEffect, useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import UserInfoTile from "./UserInfoTile";
import NavItem from "./NavItem";
import { navMenuData } from "@/app/constants/navMenuData";
import ThemeSwitcher from "../themes/ThemeSwitcher";
import { IoMenu } from "react-icons/io5";
import { FaAngleDoubleLeft as LeftArrow } from "react-icons/fa";
import { HiOutlineLogout as LogoutIcon } from "react-icons/hi";

interface UserInfoType {
  userName: string;
  userAvatar: string;
}

const defaultUserInfo = {
  userName: "user",
  userAvatar: "",
};

function Sidebar() {
  const [userInfo, setUserInfo] = useState<UserInfoType>(defaultUserInfo);
  const [isVisiblyMenu, setIsVisiblyMenu] = useState(false);
  const { signOut } = useClerk();
  const { user } = useUser();

  const router = useRouter();

  const menuButtonHandler = () => {
    setIsVisiblyMenu((prev) => !prev);
  };
  useEffect(() => {
    if (user) {
      setUserInfo({
        userName: user?.fullName || "",
        userAvatar: user?.imageUrl || "",
      });
    }
  }, [user]);

  return (
    <nav
      className={`fixed left-0 top-2 z-50 flex h-full w-44 flex-col gap-20 rounded-2xl border 
     border-light-borderColor bg-light-bg2 py-8 transition-transform  duration-1000
       ease-in-out dark:border-dark-borderColor dark:bg-dark-bg2 md:sticky  md:top-0 md:w-1/3  xl:w-1/6
      ${isVisiblyMenu ? "translate-x-0" : " -translate-x-44 transform sm:translate-x-0"}
     `}
    >
      <button
        className="absolute -right-[2.05rem] top-14 z-30 rounded-r-lg border border-l-0 border-light-borderColor bg-light-bg2 p-2 dark:border-dark-borderColor dark:bg-dark-bg2 md:hidden"
        onClick={menuButtonHandler}
      >
        {isVisiblyMenu ? <LeftArrow /> : <IoMenu />}
      </button>
      <div className="absolute right-2 top-2">
        <ThemeSwitcher />
      </div>
      <UserInfoTile
        userName={userInfo.userName}
        userAvatar={userInfo.userAvatar}
      />

      <ul className="flex w-full  flex-col gap-2">
        {navMenuData.map((navItem) => (
          <NavItem key={navItem.id} navItem={navItem} />
        ))}
      </ul>

      <button
        className="group flex cursor-pointer items-center gap-3 pl-8"
        onClick={() => signOut(() => router.push("/sign-in"))}
      >
        <LogoutIcon className="text-3xl font-extrabold transition group-hover:text-lightGray" />
        <p className="text-xl font-bold transition group-hover:text-lightGray">
          Sing Out
        </p>
      </button>
    </nav>
  );
}

export default Sidebar;
