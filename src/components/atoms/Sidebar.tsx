import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-100 w-64 p-5">
      <h2 className="text-xl font-semibold mb-5">Navigation</h2>
      <ul className="flex flex-col space-y-3">
        <li>
          <a href="/profile" className="hover:text-blue-500">
            Profile
          </a>
        </li>
        <li>
          <a href="/settings" className="hover:text-blue-500">
            Settings
          </a>
        </li>
        <li>
          <a href="/dashboard" className="hover:text-blue-500">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/logout" className="hover:text-blue-500">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
