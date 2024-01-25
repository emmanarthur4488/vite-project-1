
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import DailyUpdate from './Components/DailyUpdate/DailyUpdate'
import DesignTools from './Components/DesignTools/DesignTools'
import Tutorials from './Components/Tutorials/Tutorial'
import Library from './Components/Library/Library'
import Tools from './Components/Tools/Tools'
import HomeTools from './Components/HomeTools/HomeTools'
import Tools2 from './Components/Tools2/Tools2'
import HomeUpdate from './Components/HomeUpdate/HomeUpdate'
import HomeTutorial from './Components/HomeTutorial/HomeTutorial'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'
import More from './Components/More/More'
import InterestPost from './Components/InterestPost/InterestPost'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Daily Update' element={<DailyUpdate/>}/>
          <Route path='/Tutorials' element={<DesignTools/>}/>
          <Route path='/Tutorials' element={<Tutorials/>}/>
          <Route path='/Library' element={<Library/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
