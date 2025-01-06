import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  btnText?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  btnText,
  children,
  ...props
}) => {
  return (
    <button className={`btn rounded-sm text-base-100 ${className}`} {...props}>
      <span>{btnText}</span>
      {children}
    </button>
  );
};

export default Button;
