import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./screens/contacts/contact";
import GraphPage from "./screens/visualization/graph-page";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { toggleSidebarMenu } from "./redux-slices/common";
import { useAppDispatch, useAppSelector } from "./hooks";
import ContactDetailsPage from "./screens/contacts/contactdetails";

function App() {

  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.common.isSideBarOpen)

  const toggleSidebar = () => {
    dispatch(toggleSidebarMenu())
  };

  return (
    <div className="h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/contactdetails/:id" element={<ContactDetailsPage />} />
          <Route path="/visuals" element={<GraphPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
