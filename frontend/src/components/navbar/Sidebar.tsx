import React from "react";
import { X } from "lucide-react";
import Icon from "../ui/Icon";
import MobileNavigation from "./MobileNavigation";
import ProfileBox from "./ProfileBox";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  handleClickOutSide: (
    e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent
  ) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  sidebarRef,
  handleClickOutSide,
}) => {
  return (
    <div
      className={`absolute inset-0 z-20 block w-full h-screen transition-all duration-300 bg-black/50 md:hidden ${
        isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClickOutSide}
    >
      <div
        className={`w-64 h-full transition-all duration-300 border-r bg-base-100 border-base-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-[-200%]"
        }`}
        ref={sidebarRef}
      >
        <div className="flex flex-col h-full p-2">
          <div className="flex-1">
            {/* Close button */}
            <div className="flex items-center justify-end">
              <button onClick={() => setIsSidebarOpen(false)}>
                <Icon
                  icon={X}
                  className="transition-all duration-300 cursor-pointer size-6 hover:text-primary"
                />
              </button>
            </div>

            {/* Navigation links  */}
            <MobileNavigation />
          </div>

          {/* user profile */}
          <ProfileBox />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
