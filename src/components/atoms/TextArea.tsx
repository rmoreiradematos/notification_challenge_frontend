import React, { useState } from "react";

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}
const TextArea: React.FC<TextAreaProps> = ({
  placeholder = "Enter text here...",
  rows,
  required,
}) => {
  const [text, setText] = useState("");

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div className="w-full max-w-lg">
      <textarea
        id="custom-textarea"
        rows={rows}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        required={required}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default TextArea;
