import { HeaderStyles, HeaderVariants } from "../shared/Header.styles";

function Header() {
  return (
    <HeaderStyles variants={HeaderVariants} initial="hidden" animate="visible">
      <img url="#" alt="Logo AZ" />
      <div>
        <div className="title-container">
          <h1>AZ Compradores</h1>
        </div>
        <div className="list">
          <ul>
            <li>🇲🇽 Página mexicana.</li>
            <li>🔥 Las mejores ofertas de Amazón.</li>
            <li>♻ 100% segura y siempre actualizada.</li>
          </ul>
        </div>
        <div className="list ">
          <ul className="social-container">
            <li>
              <button>TikTok</button>
            </li>
            <li>
              <button>Youtube</button>
            </li>
            <li>
              <button>Instagram</button>
            </li>
            <li>
              <button>Facebook</button>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
}
export { Header };
