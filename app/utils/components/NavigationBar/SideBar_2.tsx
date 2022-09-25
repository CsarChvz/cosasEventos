import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "@remix-run/react";
import { Disclosure } from "@headlessui/react";
import { Center } from "@mantine/core";

function SideNavbar_2({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block h-5 w-5 lg:hidden"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-20 md:w-18 sm:w-14 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          {/* Logo */}
          <div className="flex flex-col justify-start item-center">
            <Link to="/">
              <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                E
              </h1>
            </Link>
          </div>
          {/* Menu */}
          <div className="my-4 border-b border-gray-100 pb-4">
            <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <h3>1</h3>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <h3>2</h3>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <h3>3</h3>
            </div>
          </div>
        </div>
      </Disclosure>

      <div className="container mx-auto h-screen md:w-4/5 w-11/12">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        {children}
      </div>
    </div>
  );
}
// https://youtu.be/wUMrXQaCj0Y

export default SideNavbar_2;
