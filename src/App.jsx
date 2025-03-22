import { useState, useEffect } from 'react'
import './App.css'
import Cards from './com/cards/Cards'

function App() {

  const [productList, setProductList] = useState([])
  
  async function getAllProduct() {
    try {
      let product = await fetch("https://fakestoreapi.com/products")
      let data = await product.json()
      setProductList(data)
    } catch (erorr) {
      console.log(erorr)
    }
  }

  useEffect( () => {
    getAllProduct()
  }, [])

  return (
    <>
    <div className="container">
      {
        productList.map( (item) => (
          <Cards key={item.id} image={item.image} title={item.title} category={item.category} description={item.description} price={item.price}/>
        ))
      }
    </div>

      
    </>
  )
}

export default App
