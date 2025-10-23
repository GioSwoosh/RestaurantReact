import { Link } from 'react-router-dom'

function HomeElements() {
    return (
        <div className="landingpage">
            <div className="booktablesector">
                <h2>Dine like Royalty</h2>
                <h1>Bright</h1>
                <Link to= "reservation">
                <button>Book A Table</button>
                </Link>
            </div>
            <div className="menusector">
                <h2>Explore Our Menu</h2>
                <Link to= "menu">
                <button>See the Menu</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeElements