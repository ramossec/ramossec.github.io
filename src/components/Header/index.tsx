import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export function Header() {
  const menu = [
    { name: "Início", link: "/" },
    { name: "Portfólio", link: "/portfolio" },
  ];

  return (
    <header className="flex flex-1 gap-5 h-20 bg-blue-700 px-2 items-center justify-between shadow-md sticky top-0">
      <StaticImage
        src="../../images/logo.png"
        alt="Logo"
        className="max-w-16 rounded-lg"
      />
      {/* <h4 className='text-white font-extrabold text-3xl '>Ramos Sec</h4> */}

      <ul className="flex align-middle items-center flex-row justify-center">
        {menu.map((item,index) => (
          <li key={index} className="mr-4 text-lg font-bold text-white hover:scale-110 hover:underline hover:underline-offset-8 ">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <button className="text-xl bg-slate-300 text-blue-500 p-2 rounded-xl opacity-90 hover:opacity-100 hover:text-white hover:bg-transparent ">
        Fale Conosco
      </button>
    </header>
  );
}
