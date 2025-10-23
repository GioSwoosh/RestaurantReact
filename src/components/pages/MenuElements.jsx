import assets from '../../assets/assets.js'

function MenuElements() {
  return (
    <div>
      {assets.map((category) => (
        <div key={category.id}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> — ${item.price.toFixed(2)}
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default MenuElements
