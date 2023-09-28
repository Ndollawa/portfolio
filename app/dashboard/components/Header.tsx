import React from "react";
import { HeaderProps } from "@/interfaces/header.interface";

function Header({ title }: HeaderProps) {
  const date = new Date().getUTCSeconds();
  return (
    <div className="page__header">
      <h3>{title}</h3>
      <div className="date">
        <input type="date" name="" id="" value={date} />
      </div>
    </div>
  );
}

export default Header;
