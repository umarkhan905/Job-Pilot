import React from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import Icon from "./Icon";

interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon: LucideIcon | IconType;
  iconClassName?: string;
  iconOrder?: number;
  inputOrder?: number;
}

const IconInput: React.FC<IconInputProps> = ({
  className,
  icon,
  iconClassName,
  iconOrder = 0,
  inputOrder = 1,
  ...props
}) => {
  return (
    <label className={`flex items-center gap-2 input ${className}`}>
      <Icon icon={icon} className={`order-[${iconOrder}] ${iconClassName}`} />
      <input
        type="text"
        className={`grow order-[${inputOrder}]`}
        placeholder="Search"
        {...props}
      />
    </label>
  );
};

export default IconInput;
