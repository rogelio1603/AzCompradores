import React from "react";
import Image from "next/image";
import Toggle from "react-toggle";
import { HeaderStyles, HeaderVariants } from "../shared/Header.styles";
import { useGlobalContext } from "../store/GlobalStore";

function Header() {
  const [state, dispatch] = useGlobalContext();

  return (
    <HeaderStyles variants={HeaderVariants} initial="hidden" animate="visible">
      <Image src="/images/Logo.svg" width={200} height={200} alt="Logo AZ" />
      <div className="header-container">
        <div className="title-container">
          <h1>AZ Compradores</h1>
          <Toggle
            className="toggle"
            defaultChecked={state.theme}
            icons={{
              checked: (
                <span>
                  <i className="fas fa-sun"></i>
                </span>
              ),
              unchecked: (
                <span>
                  <i className="fas fa-moon"></i>
                </span>
              ),
            }}
            onChange={() =>
              dispatch({ type: "CHANGE_THEME", payload: !state.theme })
            }
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
              <button className="button-container">
                <Image src="/images/Facebook-Icon.svg" width={25} height={25} />
              </button>
            </li>
            <li>
              <button className="button-container">
                <Image
                  src="/images/Instagram-icon.svg"
                  width={25}
                  height={25}
                />
              </button>
            </li>
            <li>
              <button className="button-container">
                <Image src="/images/Tiktok-icon.svg" width={25} height={25} />
              </button>
            </li>
            {/* <li>
              <button className="button-container">
                <Image src="/images/Youtube-Icon.svg" width={25} height={25} />
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
}
export { Header };
