import React from 'react'
import './Cards.css'

export default function Cards(item) {
  return (
    <div key={item.id} className="card" style={item.price > 100 ? {border: '2px solid red'}: {border: '2px solid green'}}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <h5>{item.category}</h5>
              <h5>Price: ${item.price}</h5>
              <p>{item.description.slice(0, 200)}</p>
            </div>
  )
}
