import React from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import Icon from "./Icon";

interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon: LucideIcon | IconType;
  iconClassName?: string;
  reverse?: boolean;
}

const IconInput: React.FC<IconInputProps> = ({
  className,
  icon,
  iconClassName,
  reverse,
  ...props
}) => {
  return (
    <label
      className={`flex items-center gap-2 input ${
        reverse ? "flex-row-reverse" : ""
      } ${className}`}
    >
      <Icon icon={icon} className={`${iconClassName}`} />
      <input type="text" className={`grow`} placeholder="Search" {...props} />
    </label>
  );
};

export default IconInput;
