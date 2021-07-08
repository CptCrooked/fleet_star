import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import { menuBtn } from "./Header/Header.module.scss";

const Layout = ({ children, theme, navState, setNavState }) => {
  const toggleNav = () => {
    if (navState === "open") {
      setNavState("closed");
    } else {
      setNavState("open");
    }
  };

  return (
    <div className={`${theme}-bg-image`}>
      <Header theme={theme} navState={navState} setNavState={setNavState} />
      <Nav theme={theme} navState={navState} />
      <button
        className={`${theme}-shadow ${theme}-card ${menuBtn}`}
        onClick={() => {
          console.log(`Menu button clicked`);
          toggleNav(navState);
        }}
      >
        -
      </button>
      {children}
      <Footer theme={theme} />
    </div>
  );
};

export default Layout;
