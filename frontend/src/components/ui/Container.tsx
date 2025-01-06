import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  variant: "div" | "section";
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  const Tag = variant;
  return (
    <Tag className={`max-w-[90%] mx-auto w-full ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Container;
