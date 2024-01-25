import { NavItemType } from "@/app/constants/navMenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  navItem: NavItemType;
}

function NavItem({ navItem }: NavItemProps) {
  const { title, icon, path } = navItem;
  const pathName = usePathname();

  return (
    <li className="flex gap-2 ">
      <Link href={path} className="group relative w-full">
        <div className="absolute top-0 z-0 h-full min-h-full w-0 transition-all  duration-1000 group-hover:w-full group-hover:bg-light-activeNavLinkHover  dark:group-hover:bg-dark-activeNavLinkHover " />
        <div
          className={` text-darkGray dark:text-lightGray flex w-full  items-center gap-3 py-4 pl-8  transition-all  group-hover:text-white group-hover:dark:text-white
      ${pathName === path && "border-r-4 border-green-400 bg-light-activeNavLink dark:bg-dark-activeNavLink"}
      `}
        >
          <div className="z-25 relative delay-150">{icon}</div>
          <p className="z-25 relative delay-150">{title}</p>
        </div>
      </Link>
    </li>
  );
}

export default NavItem;
