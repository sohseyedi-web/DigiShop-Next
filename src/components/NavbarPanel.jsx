"use client"
import * as RiIcon from "react-icons/ri";
import { useActiveSidebar } from "@/hooks/useActiveSidebar";
import { useAuth } from "@/hooks/useAuth";

const NavbarPanel = () => {
  const { setActive,active } = useActiveSidebar();
  const { user } = useAuth();

  console.log(active);

  return (
    <nav className="w-full flex shadow py-1 items-center justify-between text-gray-800">
      <h5 className="text-xl font-bold">{user?.name} , خوش اومدی</h5>
      <div className="flex items-center gap-x-4">
        <RiIcon.RiSunLine size={26} className="cursor-pointer" />
        <RiIcon.RiMenuLine
          size={26}
          className="cursor-pointer block lg:hidden"
          onClick={() => setActive(!active)}
        />
      </div>
    </nav>
  );
};

export default NavbarPanel;
