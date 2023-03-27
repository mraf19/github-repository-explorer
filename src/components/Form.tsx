type FormProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export const Form = ({ value, onChange }: FormProps) => {
  return (
    <input
      className="border border-slate-900 p-[8px] w-full rounded-md text-gray-900 font-medium placeholder:text-sm"
      placeholder="Enter username"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};
