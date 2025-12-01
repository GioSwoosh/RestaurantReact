import assets from '../../assets/assets.js'
import './Menu.css'

function MenuElements() {
  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Menu</h1>
        <p>Browse our categories and pick your favorites.</p>
      </header>

      {assets.map((category) => (
        <section className="menu-category" key={category.id}>
          <h2 className="menu-category-title">{category.category}</h2>
          <ul className="menu-items">
            {category.items.map((item) => (
              <li className="menu-item" key={item.id}>
                <div className="menu-item-main">
                  <div>
                    <div className="menu-item-name">{item.name}</div>
                    <p className="menu-item-description">
                      {item.description}
                    </p>
                  </div>
                  <div className="menu-item-meta">
                    <span className="menu-item-price">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default MenuElements
