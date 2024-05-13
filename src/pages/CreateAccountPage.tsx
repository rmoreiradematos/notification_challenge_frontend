import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import api from "../services/api";

const CreateAccountPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post("/users", {
        name: username,
        password,
        phoneNumber,
        email,
        role: "admin",
      });
      console.log("Account created:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen font-sans login bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form
              className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
              onSubmit={handleCreateAccount}
            >
              <p className="text-black font-medium text-center text-lg font-bold">
                SignUp
              </p>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-black font-medium"
                >
                  {" "}
                  Name{" "}
                </label>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="name"
                  required={true}
                />
              </div>
              <div className="mt-2">
                <label className="block text-sm text-black">PhoneNumber</label>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="PhoneNumber"
                  placeholder="PhoneNumber"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-black font-medium"
                >
                  {" "}
                  Email{" "}
                </label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  required={true}
                />
              </div>
              <div className="mt-2">
                <label className="block text-sm text-black">Password</label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required={true}
                />
              </div>
              <div className="mt-4 items-center">
                <Button type="submit">SignIn</Button>
              </div>
              <a
                href="#"
                onClick={handleNavigate}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                SignUp
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
