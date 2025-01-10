import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={`btn rounded-sm ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
