import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
            <Link to="/">Home</Link>
            <Link to="/register">Register Here</Link>
            <Link to="/login">Login</Link>
        </ul>
    </nav>
  )
}

export default Navbar