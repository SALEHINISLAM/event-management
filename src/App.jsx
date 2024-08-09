import { Button } from '@material-tailwind/react'
import { Outlet } from 'react-router-dom'
import { Header } from './SharedComponents/Navbar/Navbar'
import { Footer } from './SharedComponents/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
     
      <Header/>
      <div className="container mx-auto">
      <ToastContainer/>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
