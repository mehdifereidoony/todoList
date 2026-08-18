import { memo, useState } from "react";

const Content = () => {
  const [] = useState();
  console.log("content");
  return (
    <section
      id="content"
      className="fixed top-0 right-0 w-full h-screen bg-white dark:bg-gray-900 pt-header-h lg:pr-sidebar-w"
    >
      محتوای اصلی
    </section>
  );
};

export default memo(Content);
