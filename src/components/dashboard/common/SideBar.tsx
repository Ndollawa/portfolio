"use client";

import { useState } from "react";
import Menuitem from "./SideBar/components/Menuitem";
import MenuUserProfile from "./SideBar/components/MenuUserProfile";
import { AiOutlineClose } from "react-icons/ai";

const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <aside className={`${showMenu ? "show" : undefined}`}>
      <div className="top">
        <div className="top__logo">
          Portfolio <strong>.</strong>
        </div>

        <div className="top__close" id="close-btn">
          <AiOutlineClose />
        </div>
      </div>
      <div className="sidebar">
        <ul className="sidebar__menu scrollbar">
          <Menuitem />
        </ul>
        <MenuUserProfile />
      </div>
      {/* setShowMenu={setShowMenu} */}
    </aside>
  );
};

export default SideBar;
