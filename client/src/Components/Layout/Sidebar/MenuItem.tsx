import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router";

type menuItemType = { title: string; to: string; Icon: LucideIcon };

const MenuItem = ({ title, to, Icon }: menuItemType) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex justify-start items-center p-4 hover:bg-blue-500 hover:text-white ${
            isActive ? "bg-blue-500 text-white" : ""
          }`
        }
      >
        <Icon className="pl-2" />
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default MenuItem;
