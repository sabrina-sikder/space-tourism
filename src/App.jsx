
import Home from './pages/Home'
import Destination from './pages/destination/Destination'
import {Routes,Route,useLocation} from 'react-router-dom'
import Layout from './components/Layout'
import Moon from './pages/destination/Moon'
import Mars from './pages/destination/Mars'
import Europa from './pages/destination/Europa'
import Titan from './pages/destination/Titan'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'




function App() {
  const path = useLocation().pathname
  const location = path.split("/")[1] || "home"
  
  return (
    <div className={"page-bg "+location}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>

          <Route path='destination' element={<Destination/>}>
            <Route index element={<Moon/>}/>
            <Route path='mars' element={<Mars/>}/>
            <Route path='europa' element={<Europa/>}/>
            <Route path='titan' element={<Titan/>}/>
          </Route>
          
          <Route path='crew' element={<Crew/>}/>
          <Route path='technology' element={<Technology/>}/>

        </Route>
      </Routes>  
    </div>
  )
}

export default App
