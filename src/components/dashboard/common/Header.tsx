import React from "react";
import { HeaderProps } from "@/interfaces/header.interface";

function Header({ title }: HeaderProps) {
  const date = new Date().getUTCSeconds();
  return (
    <div className="page__header">
      <div className="date mb-5">
        <input type="date" name="" id="" />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default Header;
