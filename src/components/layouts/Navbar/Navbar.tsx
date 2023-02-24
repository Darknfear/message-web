import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const NavBar = ({ children }: Props) => {
  return (
    <div>
      <span>NavBar</span>
    </div>
  );
};

export default NavBar;
