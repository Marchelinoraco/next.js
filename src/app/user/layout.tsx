// components/Layout.js

import Head from "next/head";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen ">
      <div>
        {" "}
        <Header />
      </div>

      {/* Sidebar */}

      {/* Main content area */}
      <main className="flex-1 ">
        {/* Admin dashboard content */}
        {children}
      </main>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
