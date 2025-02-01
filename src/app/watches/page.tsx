import React from 'react'
import { DiCelluloid } from 'react-icons/di'
import { MdDescription } from 'react-icons/md'

const Watches = () => {
 
  const watchData = [
    { id: 1, name: 'Rolex', price: 12000, description: "laxury watch", image: '/laxury-rolex-watch.webp'},
    { id: 2, name: 'Omega', price: 8000, description: "Sport design", image: '/omega-watch.jpg' },
    { id: 3, name: 'patek philippe', price: 25000, description: "Elegant timepiece", image: '/patek-philippe.jpg'},
    { id: 4, name: 'Tag Heuer', price: 5000, description: "sport and stylish", image: '/tag heue 4.avif'},
    { id: 5, name: 'Breietling', price: 7000, description: "Bold and rugged", image: '/brietiling watch.jpeg'},
    { id: 6, name: 'Seiko', price: 3000, description: "Affordable and reliable", image: '/seiko-watch.jpg'},
  ]
 
  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
           <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to Cart</button>
           </div>
        ))}
      </div>
    </div>
  )
}

export default Watches
