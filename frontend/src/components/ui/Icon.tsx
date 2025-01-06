import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import React from "react";

interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  icon: LucideIcon | IconType;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: Icon, className }) => {
  return <Icon className={`size-5 ${className}`} />;
};

export default Icon;
