import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {
  toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = (props) => {

  const {toggleSidebar} = props;

  return (
    <header className="bg-blue-600 h-[50px] text-white p-2 shadow-md">
      <div className="container flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none block sm:hidden"
        >
          <GiHamburgerMenu color="#fff" size={30}/>
        </button>
        <p className="text-2xl ml-5 font-bold">Management App</p>
      </div>
    </header>
  );
};

export default Header;
