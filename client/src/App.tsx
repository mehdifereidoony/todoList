import { ToastContainer } from "react-toastify";
import Content from "./Components/Layout/Content/Content.js";
import Header from "./Components/Layout/Header/Header.js";
import Sidebar from "./Components/Layout/Sidebar/Sidebar.js";
import { useAppSelector } from "./store/hooks.js";

function App() {
  const { themeMode } = useAppSelector((state) => state.uiManagement);
  return (
    <main className={themeMode}>
      <div className="dark:text-white">
        <Content />
        <Header />
        <Sidebar />
      </div>
      <ToastContainer />
    </main>
  );
}

export default App;
