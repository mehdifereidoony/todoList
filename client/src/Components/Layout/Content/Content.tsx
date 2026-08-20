import { memo } from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import Categories from "../../../pages/Categories/Categories";
import Tasks from "../../../pages/TasksTasks";

const Content = () => {
  return (
    <section
      id="content"
      className="fixed top-0 right-0 w-full h-screen bg-white dark:bg-gray-900 pt-header-h lg:pr-sidebar-w"
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </section>
  );
};

export default memo(Content);
