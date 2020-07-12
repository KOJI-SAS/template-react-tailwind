import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main
          className="relative z-0 flex-1 overflow-x-hidden overflow-y-auto focus:outline-none"
          data-tabindex="0"
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
