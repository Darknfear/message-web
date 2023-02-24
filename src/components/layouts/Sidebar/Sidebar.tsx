import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const SideBar = ({ children }: Props) => {
  return (
    <div>
      <span>SideBar</span>
    </div>
  );
};

export default SideBar;
