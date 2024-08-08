import { Button } from '@material-tailwind/react'
import { Outlet } from 'react-router-dom'
import { Header } from './SharedComponents/Navbar/Navbar'
import { Footer } from './SharedComponents/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <div className="container mx-auto">
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
