"use client";

import React, { useState, useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { GiHamburgerMenu, GiSun } from "react-icons/gi";
import { BsMoonFill } from "react-icons/bs";
import { RiAddLine, RiUser3Line } from "react-icons/ri";
import {
  TopNav,
  Analytics,
  RecentUpdate,
  SideBar,
} from "@/components/dashboard/common";
import "./styles/styles.scss";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [themeDark, setThemeDark] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`app__dashboard ${themeDark ? "dark" : null}`}>
      <div className="nav">
        <TopNav setToggleMenu={setToggleMenu} setThemeDark={setThemeDark} />
      </div>
      <SideBar />
      <main className="main">
        <div className="main__content">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
