import React from "react";
import Image from 'next/image'
import Toggle from "react-toggle";
import { HeaderStyles, HeaderVariants } from "../shared/Header.styles";

function Header() {
  const [mode, setMode] = React.useState(false);
  return (
    <HeaderStyles variants={HeaderVariants} initial="hidden" animate="visible">
      <Image src="/images/Logo.svg" width={200} height={200}  alt="Logo AZ" />
      <div className="header-container">
        <div className="title-container">
          <h1>AZ Compradores</h1>
          <Toggle
            defaultChecked={mode}
            icons={{
              checked: <div>nani</div>,
              unchecked: null,
            }}
            onChange={() => setMode(true)}
          />
        </div>
        <div className="list">
          <ul>
            <li>🇲🇽 Página mexicana.</li>
            <li>🔥 Las mejores ofertas de Amazon.</li>
            <li>♻ 100% segura y siempre actualizada.</li>
          </ul>
        </div>
        <div className="list ">
          <ul className="social-container">
            <li>
              <button className="button-container"><Image src="/images/Facebook-Icon.svg" width={25}
        height={25} /></button>
            </li>
            <li>
              <button className="button-container"><Image src="/images/Instagram-Icon.svg" width={25}
        height={25} /></button>
            </li>
            <li>
              <button className="button-container"><Image src="/images/Instagram-Icon.svg" width={25}
        height={25} /></button>
            </li>
            <li>
              <button className="button-container"><Image src="/images/Instagram-Icon.svg" width={25}
        height={25} /></button>
            </li>
            <li>
              <button className="button-container"><Image src="/images/Youtube-Icon.svg" width={25}
        height={25} /></button>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
}
export { Header };
