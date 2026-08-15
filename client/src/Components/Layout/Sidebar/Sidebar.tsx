import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setIsOpenSidebar } from "../../../store/uiManagementSlice/uiManagementSlice";

const sidebar = () => {
  const dispatch = useAppDispatch();
  const { openSidebar } = useAppSelector((state) => state.uiManagement);
  return (
    <section
      id="sidebar"
      className={`fixed top-0 transition-all w-sidebar-w h-screen bg-white shadow-lg lg:right-0 lg:shadow-none lg:border-l lg:border-gray-400 ${
        openSidebar ? "right-0" : "-right-sidebar-w"
      }`}
    >
      <button
        className="lg:hidden"
        onClick={() => dispatch(setIsOpenSidebar(false))}
      >
        ❌
      </button>
    </section>
  );
};

export default sidebar;
