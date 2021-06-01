import { ThemeProvider } from "@emotion/react";
import { LayoutStyles } from "../shared/Layout.style";
// * Themes
import { white as themeWhite } from "../shared/theme";
// * Components
import { Header } from "./Header";
import { Footer } from "./Footer";

function Layout({ children }) {
  return (
    <LayoutStyles>
      <ThemeProvider theme={themeWhite}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </LayoutStyles>
  );
}

export { Layout };
