
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Joshim-Blog
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-indigo-200">
            Home
          </Link>

          <a href="#footer" className="hover:text-indigo-200">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;