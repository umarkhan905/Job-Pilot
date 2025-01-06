import React from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ className, children }) => {
  return <div className={`border rounded-sm p-2 ${className}`}>{children}</div>;
};

export default Box;
