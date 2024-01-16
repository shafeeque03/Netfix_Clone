import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {action,originals} from './urls'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Banner/>
     <RowPost url ={originals} title = 'Netflix Originals'/>
     <RowPost url ={action} title = 'Action Movies' isSmall/>
    
    </>
  )
}

export default App
