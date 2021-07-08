import Link from "next/link";
import Image from "next/image";
import logo from "/public/imgs/fs_logo2.png";
import headerStyles from "./Header.module.scss";

const { header, logoBckgnd } = headerStyles;

const Header = ({ theme }) => {
  // return (
  //   <header className={`${header} ${theme}-bg-image ${theme}-shadow`}>
  //     <div className={`${theme}-bg-glass bg-overlay`}></div>
  //     <Link href="/">
  //       <a className={`${theme}-shadow light-card ${logoBckgnd}`}>
  //         <Image src={logo} width={100} height={37} alt="Fleet Star Logo" />
  //       </a>
  //     </Link>
  //   </header>
  // );
  return (
    <header className={`${header} ${theme}-bg-glass ${theme}-shadow`}>
      <Link href="/">
        <a className={`${theme}-shadow light-card ${logoBckgnd}`}>
          <Image src={logo} width={100} height={37} alt="Fleet Star Logo" />
        </a>
      </Link>
    </header>
  );
};

export default Header;
