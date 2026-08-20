import {
  LayoutDashboard,
  ListSortDescending,
  ListTodo,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  setIsOpenSidebar,
  toggleTheme,
} from "../../../store/uiManagementSlice/uiManagementSlice";
import { memo } from "react";
import MenuItem from "./menuItem";

const sidebar = () => {
  const dispatch = useAppDispatch();
  const { openSidebar, themeMode } = useAppSelector(
    (state) => state.uiManagement
  );
  return (
    <section
      id="sidebar"
      className={`fixed top-0 transition-all w-sidebar-w h-screen bg-white dark:bg-gray-900 shadow-lg lg:right-0 lg:shadow-none lg:border-l lg:border-gray-400 ${
        openSidebar ? "right-0" : "-right-sidebar-w"
      }`}
    >
      <div className="flex items-center justify-between h-header-h p-2 border-b border-gray-400">
        <button
          className="lg:hidden"
          onClick={() => dispatch(setIsOpenSidebar(false))}
        >
          <X />
        </button>
        <button onClick={() => dispatch(toggleTheme())}>
          {themeMode === "dark" ? <Moon /> : <Sun />}
        </button>
      </div>
      <div>
        <ul className="">
          <MenuItem title={"داشبرد"} to="/" Icon={LayoutDashboard} />
          <MenuItem
            title={"دسته ها"}
            to="/categories"
            Icon={ListSortDescending}
          />
          <MenuItem title={"تسک ها"} to="/tasks" Icon={ListTodo} />
        </ul>
      </div>
    </section>
  );
};

export default memo(sidebar);
