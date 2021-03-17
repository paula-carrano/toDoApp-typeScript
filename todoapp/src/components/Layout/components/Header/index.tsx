import React, { FC } from "react";
import { NavBar } from "./components";
import "./styles.css";

const Header: FC = () => {
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};

export { Header };
