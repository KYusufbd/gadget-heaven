import { Outlet } from 'react-router'
import Navbar from './Navbar'

function App() {

  return (
    <div className='bg-[#F6F6F6]'>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default App
