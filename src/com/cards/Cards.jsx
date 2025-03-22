import React from 'react'
import './Cards.css'

export default function Cards(item) {
  return (
    <div key={item.id} className="card">
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <h5>{item.category}</h5>
              <p>{item.description.slice(0, 200)}</p>
            </div>
  )
}
