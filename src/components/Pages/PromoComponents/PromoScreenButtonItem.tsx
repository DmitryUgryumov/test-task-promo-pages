import React from "react";

interface PromoScreenButtonProps {
  value: string;
  handler(): void;
  className: string;
}

const PromoScreenButtonItem: React.FC<PromoScreenButtonProps> = ({
  value,
  handler,
  className,
}) => {
  return (
    <button
      onClick={handler}
      className={className}
      onFocus={(e) => e.target.classList.add("focused")}
      onBlur={(e) => e.target.classList.remove("focused")}
    >
      {value}
    </button>
  );
};

export default PromoScreenButtonItem;
