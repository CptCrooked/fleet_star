import navStyles from "./Nav.module.scss";
import Link from "next/link";

const { nav } = navStyles;

const Nav = ({ theme, navState }) => {
  const navToggleClass = navState === "open" ? "nav-open" : "nav-closed";
  return (
    <nav className={`${nav} ${theme}-bg-image ${navToggleClass}`}>
      <ul>
        {/* TODO: Convert lis to Button component*/}
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact Us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
