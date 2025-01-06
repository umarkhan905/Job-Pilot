import React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src: string;
  alt?: string;
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  src,
  alt,
  children,
  ...props
}) => {
  return (
    <div className="avatar" {...props}>
      <div className={`w-8 rounded-full border ${className}`}>
        <img src={src} alt={alt} />
        {children}
      </div>
    </div>
  );
};

export default Avatar;
