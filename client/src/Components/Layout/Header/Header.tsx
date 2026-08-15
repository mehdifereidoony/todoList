import { Menu } from "lucide-react";
import { useAppDispatch } from "../../../store/hooks";
import { setIsOpenSidebar } from "../../../store/uiManagementSlice/uiManagementSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <section
      id="header"
      className="fixed top-0 right-0 w-full h-header-h bg-white dark:bg-gray-900 border-b border-gray-400 lg:pr-sidebar-w"
    >
      <div className="flex items-center h-full p-2">
        <button
          className="lg:hidden"
          onClick={() => dispatch(setIsOpenSidebar(true))}
        >
          <Menu />
        </button>
      </div>
    </section>
  );
};

export default Header;
