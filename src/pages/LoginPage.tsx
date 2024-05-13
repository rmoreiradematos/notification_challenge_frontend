import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import { useAuth } from "../hooks/useAuth";
import api from "../services/api";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth", {
        email,
        password,
      });
      login(response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <div className="h-screen font-sans login bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form
              className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
              onSubmit={handleLogin}
            >
              <p className="text-black font-medium text-center text-lg font-bold">
                LOGIN
              </p>
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
                <label className="block text-sm text-black">Senha</label>
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

export default LoginPage;
