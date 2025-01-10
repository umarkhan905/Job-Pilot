import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuContent,
} from "../ui/DropdownMenu";
import Avatar from "../ui/Avatar";
import { Menu, MenuItem } from "../ui/Menu";
import { userDropdown } from "../../data/navbar/data";
import Icon from "../ui/Icon";

const AvatarDropdown = () => {
  return (
    <DropdownMenu className="dropdown-top">
      <DropdownMenuButton
        tabIndex={1}
        className="flex items-center justify-center"
      >
        <Avatar
          src={`https://randomuser.me/api/portraits/men/1.jpg`}
          className="w-12"
          alt="Profile Picture"
        />
      </DropdownMenuButton>
      <DropdownMenuContent tabIndex={1}>
        <Menu className="p-2 border rounded-sm bg-base-100">
          {userDropdown.map(({ id, name, icon, link }) => (
            <MenuItem
              key={id}
              className="hover:item-background focus:item-background"
              link={link}
            >
              <Icon icon={icon} className="size-4" />
              {name}
            </MenuItem>
          ))}
        </Menu>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
