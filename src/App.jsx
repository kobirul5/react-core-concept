import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './coponents/products/products'
import Product from './coponents/product/product'
function App() {
  

  // const [state, setState] = useState(0)
  // const handleStatCount= () => {
  //   setState(state + 1)
  //   console.log(state)
  // }

  const [status, setStatus] = useState(false)
  const handleStatus = () =>{
    setStatus(!status)
    console.log(status)
  }
   
  const transfer = (massege) => {
    console.log(massege)
  }

  return (
    <>

 
        <Products tran = {transfer}></Products>
        




      <div>
        <button onClick={handleStatus}>Status</button>
      </div>

        {
          // status?<Products></Products>:<Product></Product>
        }
    
      
    </>
  )
}

export default App
