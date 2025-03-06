import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-gray-700">Manage Leads</h1>

      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500 text-xl cursor-pointer hover:text-blue-600" />
        <FaUserCircle className="text-gray-500 text-2xl cursor-pointer hover:text-blue-600" />
      </div>
    </header>
  );
};

export default Navbar;
