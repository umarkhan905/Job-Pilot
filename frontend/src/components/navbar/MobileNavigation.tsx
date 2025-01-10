import { Menu, MenuNavItem } from "../ui/Menu";
import { mobileNavigationLinks } from "../../data/navbar/data";
import Icon from "../ui/Icon";

const MobileNavigation = () => {
  return (
    <Menu className="p-0 mt-2 space-y-1" size="menu-md">
      {mobileNavigationLinks.map(({ name, link, icon }, index) => (
        <MenuNavItem
          link={link}
          key={index}
          className="text-base space-x hover:item-background"
          activeClassName="bg-base-300/40 rounded-sm text-primary"
        >
          <Icon icon={icon} />
          {name}
        </MenuNavItem>
      ))}
    </Menu>
  );
};

export default MobileNavigation;
