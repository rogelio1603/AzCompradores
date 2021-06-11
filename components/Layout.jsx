import { ThemeProvider } from "@emotion/react";
import { LayoutStyles } from "../shared/Layout.style";
// * Themes
import { white as themeWhite, black as themeBlack } from "../shared/theme";
// * Components
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useGlobalContext } from "../store/GlobalStore";

function Layout({ children }) {
  const [state] = useGlobalContext();
  return (
    <LayoutStyles>
      <ThemeProvider theme={state.theme ? themeBlack : themeWhite}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </LayoutStyles>
  );
}

export default Layout;
