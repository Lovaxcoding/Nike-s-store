import Image from "next/image";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `bg-${backgroundColor} text-${textColor} border-${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <Image
          src={iconURL}
          alt='arrow right icon'
          width={20}
          height={20}
          className='ml-2 rounded-full bg-white'
        />
      )}
    </button>
  );
};

export default Button;
