import { PropsWithChildren } from "react";
import SideBar from "./Sidebar";
import NavBar from "./Navbar";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <NavBar />
      <SideBar />
      { children }
    </div>
  );
}

export default DefaultLayout;
