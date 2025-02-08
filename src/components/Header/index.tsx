import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export function Header() {
  const menu = [
    { name: "Início", link: "/" },
    // { name: "Portfólio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <header className="flex flex-1 gap-5 h-20 bg-blue-700 px-4 items-center justify-between shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center">
        <StaticImage
          src="../../images/logo.png"
          alt="Logo"
          className="max-w-16 rounded-lg mr-2"
        />
      </div>
      <nav className="flex-grow">
        <ul className="flex justify-center items-center">
          {menu.map((item, index) => (
            <li key={index} className="mx-4">
              <Link
                to={item.link}
                className="text-lg font-bold text-white hover:text-blue-200 transition-colors duration-300 hover:underline hover:underline-offset-8"
                activeClassName="text-blue-200 underline underline-offset-8"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#contact-form" className="text-lg bg-white text-blue-700 px-4 py-2 rounded-full font-bold transition-all duration-300 hover:bg-blue-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
        Fale Conosco
      </a>
    </header>
  );
}
