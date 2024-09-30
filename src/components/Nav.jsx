import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="px-8 py-8 absolute z-10 w-full sm:px-16">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16  max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="font-montserrat text-slate-gray text-lg"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 text-lg font-medium font-montserrat leading-normal max-lg:hidden wide:mr-24">
          <a href="#sign-in">Sign in</a>
          <span> / </span>
          <a href="#explore-now">Explore now</a>
        </div>

        <div className="lg:hidden">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
