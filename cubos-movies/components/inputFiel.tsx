interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

export const InputField = ({
  id,
  label,
  placeholder,
  type = "text",
  error,
  ...rest
}: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm text-gray-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full p-3 rounded bg-background text-white placeholder-[#6F6D78] border-[#3C393F] border focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border border-red-500" : ""
        }`}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
