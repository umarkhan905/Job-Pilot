import React from "react";
import { Link, NavLink } from "react-router-dom";

interface MenuItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  disabledItem?: boolean;
  link: string;
}

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  size?: "menu-xs" | "menu-sm" | "menu-md" | "menu-lg";
  children: React.ReactNode;
}

interface MenuNavItemProps extends MenuItemProps {
  activeClassName?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className,
  disabledItem,
  link,
  tooltip,
  ...props
}) => {
  return (
    <li>
      <Link
        to={link}
        className={`${disabledItem ? "disabled" : ""} ${
          tooltip ? "tooltip" : ""
        } ${className}`}
        data-tip={tooltip}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};

const MenuNavItem: React.FC<MenuNavItemProps> = ({
  children,
  className,
  disabledItem,
  link,
  activeClassName,
  ...props
}) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `${isActive ? `${activeClassName}` : ""} ${
            disabledItem ? "disabled" : ""
          } ${className}`
        }
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
};

const Menu: React.FC<MenuProps> = ({ className, size, children, ...props }) => {
  return (
    <ul className={`menu ${size} ${className}`} {...props}>
      {children}
    </ul>
  );
};

export { Menu, MenuItem, MenuNavItem };
