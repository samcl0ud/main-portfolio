import Navbar from "./components/navbar"
import { Outlet } from 'react-router-dom'
import GlobalStyles from "./Global.styling.jsx"

function App() {
  return <div classname="App">
    <Navbar />
    <Outlet />
    <GlobalStyles />
  </div>
}

export default App
