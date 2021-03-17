import React, { FC } from "react";
import { Header, Footer, Aside } from "./components";
import "./styles.css";

interface Props {
  hideHeader: boolean
  hideAside: boolean
  hideFooter: boolean
}

const Layout: FC<Props> = ({ children, hideHeader = false, hideAside = false, hideFooter = false }) => {

  return (
    <div className="layout">
      {hideAside === false && <Aside />}
      <div className="contenedor">
        {hideHeader === false && <Header />}
        {children}
        {hideFooter === false && <Footer />}
      </div>
    </div>
  );
};

export { Layout };
