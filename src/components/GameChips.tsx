import React, { ComponentProps } from "react";

type ChipProps = ComponentProps<"button"> & {
  icon: string; // URL of the icon image
  alt: string; // Alt text for the icon
  className?: string; // Additional classes
  imageClassName?: string;
};

const Chip: React.FC<ChipProps> = ({
  icon,
  alt,
  className,
  imageClassName,
  ...buttonProps
}) => {
  return (
    <button
      className={`relative rounded-full before:absolute before:inset-0 before:rounded-full before:z-10 group ${className}`}
      {...buttonProps}
    >
      <span className="sr-only">Choose {alt}</span>
      <span
        className={`bg-[#DBDBDB] absolute grid rounded-full place-content-center shadow-inside group-hover:bg-white transition-colors duration-200 ${imageClassName} `}
      >
        <img
          className="min-w-full aspect-square"
          src={icon}
          alt={`${alt} icon`}
        />
      </span>
    </button>
  );
};

export default Chip;
