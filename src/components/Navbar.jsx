import { Link } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './Navbar.css'

function Navbar() {
    return (
        <>
        <nav className = "navbar">
            <ul className = "nav-list">
                <li>
                    <Link to= "menu">Menu</Link>
                </li>
                <li>
                    <Link to= "/"><img src={viteLogo} className="nav-logo" alt="Vite logo" /></Link>
                </li>
                <li>
                    <Link to= "reservation">Reservation</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar