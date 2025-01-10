import React, { useRef, useState } from "react";
import { MenuIcon } from "lucide-react";
import Logo from "../../components/logo/Logo";
import Sidebar from "../../components/navbar/Sidebar";
import DesktopNavigation from "../../components/navbar/DesktopNavigation";
import Icon from "../../components/ui/Icon";
import AuthDropdown from "../../components/navbar/AuthDropdown";
// import AvatarDropdown from "../../components/navbar/AvatarDropdown";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutSide = (
    e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent
  ) => {
    if (sidebarRef.current) {
      if (!sidebarRef.current.contains(e.target as Node)) {
        setIsSidebarOpen(false);
      }
    }
  };

  return (
    <div className="sticky top-0 z-50 border-b navbar bg-base-100 backdrop-blur-2xl border-base-300">
      <div className="navbar-start">
        <Logo />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          handleClickOutSide={handleClickOutSide}
          sidebarRef={sidebarRef}
        />
      </div>

      <div className="hidden navbar-center md:flex">
        <DesktopNavigation />
      </div>

      <div className="space-x-3 navbar-end">
        <button onClick={() => setIsSidebarOpen(true)}>
          <Icon
            icon={MenuIcon}
            className="block transition-all duration-300 cursor-pointer hover:text-primary md:hidden"
          />
        </button>
        <AuthDropdown />
        {/* <AvatarDropdown /> */}
      </div>
    </div>
  );
};

export default Navbar;
