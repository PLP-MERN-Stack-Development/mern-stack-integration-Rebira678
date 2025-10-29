import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <Link to="/" className="font-bold text-2xl text-blue-600">
        MERN Vlog
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        {!user ? (
          <>
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link to="/register" className="hover:text-blue-600">
              Register
            </Link>
          </>
        ) : (
          <>
            <span className="font-medium">{user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
