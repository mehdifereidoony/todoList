import type { LucideIcon } from "lucide-react";

type menuItemType = { title: string; to: string; Icon: LucideIcon };

const MenuItem = ({ title, to, Icon }: menuItemType) => {
  return (
    <li>
      <a
        href={to}
        className="flex justify-start items-center p-4 hover:bg-blue-500 hover:text-white"
      >
        <Icon className="pl-2" />
        <span>{title}</span>
      </a>
    </li>
  );
};

export default MenuItem;
