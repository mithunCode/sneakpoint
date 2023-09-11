const Button = ({
  label,
  iconURL,
  backGroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none
      ${backGroundColor} ? ${backGroundColor} ${textColor} ${borderColor}:
      text-lg bg-coral-red rounded-full text-black   border-coral-red ${
        fullWidth && "w-full"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrowIcon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
