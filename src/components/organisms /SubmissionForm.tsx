import React, { useState } from "react";
import FormInput from "../molecules/FormInput";
import Button from "../atoms/Button";

const SubmissionForm: React.FC = () => {
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) {
      alert("Message cannot be empty.");
      return;
    }
    console.log("Submitting", { category, message });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <FormInput
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <FormInput
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};

export default SubmissionForm;
