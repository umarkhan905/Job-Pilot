import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  const Tag = variant;
  return (
    <Tag className={`font-semibold ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
