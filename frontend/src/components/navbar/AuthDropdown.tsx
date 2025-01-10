import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuContent,
} from "../ui/DropdownMenu";
import Icon from "../ui/Icon";
import { LogIn } from "lucide-react";
import { authDropdown } from "../../data/navbar/data";
import { Menu, MenuItem } from "../ui/Menu";

const AuthDropdown = () => {
  return (
    <DropdownMenu className="dropdown-bottom dropdown-left">
      <DropdownMenuButton tabIndex={0}>
        <Icon
          icon={LogIn}
          className="transition-all duration-300 cursor-pointer hover:text-primary"
        />
      </DropdownMenuButton>
      <DropdownMenuContent tabIndex={0}>
        <Menu className="p-2 border rounded-sm bg-base-100">
          {authDropdown.map(({ id, name, icon, link }) => (
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

export default AuthDropdown;
