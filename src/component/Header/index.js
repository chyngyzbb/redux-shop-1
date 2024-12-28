import React from "react";
import Logo from "../../img/headerLogo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-yellow-400 py-5 px-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <img width={50} src={Logo} />
          <div className="flex gap-11 items-center font-bold text-[18px]">
            <NavLink to='/'>Products</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
            <NavLink to='/basket'>Basket</NavLink>
          </div>
          <select
            id="countries"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option selected>Choose a country</option>
            <option defaultValue="US">United States</option>
            <option defaultValue="CA">Canada</option>
            <option defaultValue="FR">France</option>
            <option defaultValue="DE">Germany</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
