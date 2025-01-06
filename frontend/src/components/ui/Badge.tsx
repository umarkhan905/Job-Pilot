import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ className, children, ...props }) => {
  return (
    <div className={`badge ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Badge;
