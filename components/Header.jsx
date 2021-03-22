import { HeaderStyles, HeaderVariants } from "../shared/Header.styles";

function Header() {
  return (
    <HeaderStyles variants={HeaderVariants} initial="hidden" animate="visible">
      <img url="#" alt="Logo AZ" />
      <div>
        <div className="title-container">
          <h1>az nani</h1>
          <button>Message</button>
        </div>
        <div>
          <p>Them mamu</p>
          <p>Entrepreneur</p>
          <ul>
            <li>For nanai</li>
            <li>Maning nani</li>
            <li>Click on link</li>
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
}
export { Header };
