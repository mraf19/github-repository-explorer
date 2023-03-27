type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="block rounded-md w-full bg-sky-500 p-[8px] mt-[10px] text-white  text-base font-bold hover:bg-sky-600"
    >
      Search
    </button>
  );
};
