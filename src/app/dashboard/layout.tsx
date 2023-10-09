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
import "./dashboard.scss";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [themeDark, setThemeDark] = useState(false);

  return (
    <div className={`app__dashboard ${themeDark ? "dark" : null}`}>
      <SideBar />
      <main className="main">
        <div className="main__content">{children}</div>
      </main>
      <div className="right__nav">
        <TopNav setThemeDark={setThemeDark} />
        <RecentUpdate />
        <Analytics />
      </div>
    </div>
  );
};

export default AdminLayout;