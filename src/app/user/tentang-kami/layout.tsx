// components/Layout.js

import Header from "@/components/header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen  bg-11">
      {/* Sidebar */}

      {/* Main content area */}
      <main className="flex-1 ">
        {/* Admin dashboard content */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
