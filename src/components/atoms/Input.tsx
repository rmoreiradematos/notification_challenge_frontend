import React from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type = "text",
  placeholder,
  name,
  required = false,
}) => (
  <input
    className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
    required={required}
  />
);

export default Input;
