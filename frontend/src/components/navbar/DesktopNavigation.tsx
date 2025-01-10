import { Menu, MenuNavItem } from "../ui/Menu";
import { desktopNavigationLinks } from "../../data/navbar/data";

const DesktopNavigation = () => {
  return (
    <Menu className="px-1 menu-horizontal" size="menu-sm">
      {desktopNavigationLinks.map(({ name, link }, index) => (
        <MenuNavItem
          className="text-base hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary focus:rounded-sm"
          activeClassName="active-navbar-item"
          link={link}
          key={index}
        >
          {name}
        </MenuNavItem>
      ))}
    </Menu>
  );
};

export default DesktopNavigation;
