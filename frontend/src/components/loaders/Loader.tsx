import React from "react";

interface LoaderProps {
  loaderSize: "loading-xs" | "loading-sm" | "loading-md" | "loading-lg";
  loaderColor?:
    | "text-primary"
    | "text-secondary"
    | "text-accent"
    | "text-error"
    | "text-info"
    | "text-success"
    | "text-warning"
    | "text-neutral";
  loaderVariant:
    | "loading-ring"
    | "loading-dots"
    | "loading-spinner"
    | "loading-bars"
    | "loading-infinity";
}

const Loader: React.FC<LoaderProps> = ({
  loaderColor,
  loaderSize,
  loaderVariant,
}) => {
  return (
    <span
      className={`loading ${loaderColor} ${loaderSize} ${loaderVariant}`}
    ></span>
  );
};

export default Loader;
