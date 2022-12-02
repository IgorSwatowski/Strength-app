import { Link } from "react-router-dom"
import { useAuthContext, User } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const { user }: { user: User | null } = useAuthContext();
  const { logout } = useLogout();
  
  const handleLogout = async () => {
    logout();
  }
  
  return (
    <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/">Home</Link>
            {user ? (
              <>
                <h1>{user.email}</h1>
                <button onClick={handleLogout}>Log out</button>
              </>
            ) : (
              <>
                <Link to="/signup">Signup Here</Link>
                <Link to="/login">Login</Link>
              </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar