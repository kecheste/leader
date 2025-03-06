import { FaUser, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-5 flex flex-col space-y-6 hidden md:block">
      <h2 className="text-xl font-bold text-orange-600">Leader</h2>

      <nav className="flex flex-col space-y-4">
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-700 hover:text-orange-600"
        >
          <FaUser /> <span>Leads</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-700 hover:text-orange-600"
        >
          <FaChartBar /> <span>Analytics</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-700 hover:text-orange-600"
        >
          <FaCog /> <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
