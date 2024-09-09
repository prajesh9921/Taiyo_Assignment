import React from "react";
import { useNavigate } from "react-router-dom";

interface Sidebarprops {
  isOpen: boolean;
}

const Sidebar: React.FC<Sidebarprops> = (props) => {
  const { isOpen } = props;
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <aside
        className={`fixed top-50 left-0 h-full w-64 bg-gray-800 text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 md:block z-50`}
      >
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => handleNavigation("/")}
                className="w-full text-left hover:bg-gray-700 p-2 rounded"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/visuals")}
                className="w-full text-left hover:bg-gray-700 p-2 rounded"
              >
                Graph
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
