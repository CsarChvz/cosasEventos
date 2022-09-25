import React from "react";
function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="navbar bg-base-100 p-4s">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="container mx-auto h-screen md:w-4/5 w-11/12 px-6">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        {children}
      </div>
    </>
  );
}

export default NavBar;
