import { Link } from 'react-router-dom'
import './Home.css'

function HomeElements() {
  return (
    <div className="landingpage">
      <div className="booktablesector">
        <p className="eyebrow">Dine like Royalty</p>
        <h1>Bright</h1>
        <p className="subtitle">
          A modern dining experience with handcrafted dishes, made to share.
        </p>
        <div className="hero-buttons">
          <Link to="/reservation">
            <button className="btn btn-primary">Book a Table</button>
          </Link>
          <Link to="/menu">
            <button className="btn btn-primary">View Menu</button>
          </Link>
        </div>
      </div>

      <div className="menusector">
        <h2>Curated for every craving</h2>
        <p>From small plates to chef specials, browse our full menu in seconds.</p>
      </div>
    </div>
  )
}

export default HomeElements

