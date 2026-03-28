import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Main from './components/Main/Main'
import Navbar from './components/Navbar'
import Cart from './components/Main/Cart'

const modelsData = async()=>{
  const res = await fetch('models.json')
  return res.json()
}

const modelsPromise = modelsData();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      {activeTab === 'model' ? <Main modelsPromise={modelsPromise}
      cart={cart}
      setCart={setCart}
      setActiveTab={setActiveTab}
      ></Main> : <Cart></Cart>}
      <Footer></Footer>
    </>
  )
}

export default App
