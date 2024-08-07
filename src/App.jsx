import { Outlet } from 'react-router-dom'
import Footer from './SharedComponents/Footer/Footer'
import Navbar from './SharedComponents/Navbar/Navbar'

function App() {
 const date= new Date()
  return (
    <>
      <div className="container mx-auto">
        <Navbar/>
        <Outlet/>
        <Footer/>
        <div className="text-center">
          All Rights Reserved : {date.getFullYear()}
        </div>
      </div>
    </>
  )
}

export default App
