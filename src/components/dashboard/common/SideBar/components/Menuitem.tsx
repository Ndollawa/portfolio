"use client";

import React, { useState } from "react";
import { MenuItems } from "./MenuLinks";

export default function Menuitem() {
  const [menuItems, setMenuItems] = useState(MenuItems);
  // const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = (id: number) => {
    setMenuItems((prevValue) => {
      return prevValue.map((menu) => {
        return menu.id === id ? { ...menu, isOpen: !menu.isOpen } : menu;
      });
    });
  };

  const link = menuItems.map((item, index): JSX.Element | undefined => {
    switch (item.type) {
      case "link":
        // BASIC LINK
        return (
          <li className={`sidebar__menu--item`} key={item.id}>
            <a
              href={item.url}
              className={` ${item.isActive ? "active" : null}`}
            >
              <div className="d-flex align-content-center g-5">
                <span>{item.icon} </span>
                <h3>{item.title}</h3>
              </div>
              {/* <span className="message__count">3</span> */}
            </a>
          </li>
        );
        break;

      case "dropdown":
        //  DROPDOWN LINK
        return (
          <li className="sidebar__menu--item" key={item.id}>
            <div
              className={item.isActive ? "active" : undefined}
              key={item.id}
              onClick={() => handleToggleMenu(item.id)}
            >
              <div className="d-flex align-content-center g-5">
                <span> {item.icon}</span>
                <h3>{item.title}</h3>
              </div>
              {/* <span className="message__count">3</span> */}
              <span className="toggle-icon">
                <svg
                  className=""
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={item.isOpen ? { display: "none" } : undefined}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
                <svg
                  className=""
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={!item.isOpen ? { display: "none" } : undefined}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </div>
            <ul
              className=""
              style={!item.isOpen ? { display: "none" } : undefined}
            >
              {item.subMenu?.map((link, i): JSX.Element | undefined => {
                return (
                  <li className={``} key={"subMenu_" + i}>
                    <a
                      href={link.url}
                      className={` ${item.isActive ? "active" : null}`}
                    >
                      {/* <span>{link.icon} </span> */}
                      <h3>{link.title}</h3>
                      {/* <span className="message__count">3</span> */}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        );
        break;

      default:
        return undefined;
        break;
    }
  });
  return <>{link}</>;
}
