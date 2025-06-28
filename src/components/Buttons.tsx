import type { Buttons } from "../types/Types";

const Button = ({ className, type, children, onClick, link }: Buttons) => {
  if (link.length > 0)
    return (
      <a href={link} className={`flex justify-center items-center  ${className}`} type={type} onClick={onClick}>
        {children}
      </a>
    );
  return (
    <button className={`flex justify-center items-center  ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
