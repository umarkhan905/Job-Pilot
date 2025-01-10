import React from "react";

interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

interface DropdownMenuButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  tabIndex?: number;
}

interface DropdownMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  tabIndex?: number;
}

const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = ({
  className,
  children,
  tabIndex,
  ...props
}) => {
  return (
    <div tabIndex={tabIndex} role="button" className={className} {...props}>
      {children}
    </div>
  );
};

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  className,
  tabIndex,
  ...props
}) => {
  return (
    <div
      tabIndex={tabIndex}
      className={`dropdown-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`dropdown ${className}`} {...props}>
      {children}
    </div>
  );
};

export { DropdownMenu, DropdownMenuButton, DropdownMenuContent };
