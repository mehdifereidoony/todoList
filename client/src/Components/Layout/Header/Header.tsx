import { useAppDispatch } from "../../../store/hooks";
import { setIsOpenSidebar } from "../../../store/uiManagementSlice/uiManagementSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <section
      id="header"
      className="fixed top-0 right-0 w-full h-header-h bg-white border-b border-gray-400 lg:pr-sidebar-w"
    >
      <button
        className="lg:hidden"
        onClick={() => dispatch(setIsOpenSidebar(true))}
      >
        📂
      </button>
    </section>
  );
};

export default Header;
