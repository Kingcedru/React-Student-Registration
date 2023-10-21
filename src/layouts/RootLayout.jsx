import React from "react";
import menu from "../assets/menu-fill.svg";
import { NavLink, Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <header className="bg-indigo-500 mb-10 py-7">
        <nav className="text-white flex gap-4 justify-center text-lg font-semibold">
          <img className="md:hidden" src={menu} />
          <div className="hidden md:block">
            <NavLink to="/">Register</NavLink>
            <NavLink to="/students">View Students</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
