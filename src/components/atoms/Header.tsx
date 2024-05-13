import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [token, setToken] = useState<boolean>(false);

  useEffect(() => {
    const appToken = localStorage.getItem("token");
    if (appToken) {
      setToken(true);
    } else {
      window.location.href = "/login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
    window.location.href = "/login";
  };

  return (
    <div className="bg-blue-500 text-white text-lg p-4 flex justify-between items-center">
      <h1>Gila</h1>
      {token && (
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/home" className="hover:text-gray-200">
                Notification
              </a>
            </li>
            <li>
              <a href="/logs" className="hover:text-gray-200">
                Table Logs
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleLogout}
                className="hover:text-gray-200"
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
