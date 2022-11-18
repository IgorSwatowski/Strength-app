import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"

const Navbar = () => {
  const { user }: any = useAuthContext();
  
  return (
    <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/">Home</Link>
            {user ? (
              <>
                <h1>{user?.email}</h1>
                <button>Logout</button>
              </>
            ) : (
              <>
                <Link to="/register">Register Here</Link>
                <Link to="/login">Login</Link>
              </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar