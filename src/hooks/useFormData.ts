import { useState, ChangeEvent } from "react";

export function useFormData<T extends Object>(initialState: T) {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => setFormData(initialState);

  return {
    formData,
    handleChange,
    resetForm,
  };
}
