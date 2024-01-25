import { JSXElementConstructor, ReactElement } from "react";
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { FaListCheck as ListIcon } from "react-icons/fa6";
import { FaCheck as CheckIcon } from "react-icons/fa";
import { TbClipboardList as TodoIcon } from "react-icons/tb";

export interface NavItemType {
  id: number;
  title: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  path: string;
}

export const navMenuData = [
  {
    id: 1,
    title: "All Tasks",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: <ListIcon />,
    path: "/important-tasks",
  },
  {
    id: 3,
    title: "Completed!",
    icon: <CheckIcon />,
    path: "/completed-tasks",
  },
  {
    id: 4,
    title: "Unfulfilled!",
    icon: <TodoIcon />,
    path: "/incomplete-tasks",
  },
];
