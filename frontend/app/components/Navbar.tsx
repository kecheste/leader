import { FaPlus } from "react-icons/fa";

interface NavbarProps {
  setShowForm: (show: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setShowForm }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-gray-700">Manage Leads</h1>
      <button
        className="bg-orange-600 text-white p-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-orange-700 transition"
        onClick={() => setShowForm(true)}
      >
        <FaPlus className="text-white text-lg" />
        <p>Add Lead</p>
      </button>
    </header>
  );
};

export default Navbar;
