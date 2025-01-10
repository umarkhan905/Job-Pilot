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
      <div className={`rounded-full border ${className}`}>
        <img src={src} className="object-cover w-full h-full" alt={alt} />
        {children}
      </div>
    </div>
  );
};

export default Avatar;
