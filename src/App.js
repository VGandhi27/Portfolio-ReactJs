import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Blog from "./routes/Blog"
import Navbar from  "./routes/Navbar"
import Contact from './routes/Contact'
import Project from './routes/Project'


const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          {/* <Route index element={<><Home  /></>} /> */}
            <Route exact path="contact" element={<Contact  />} />
            <Route  exact path="blog" element={<Blog />} />
            <Route exact path="project" element={<Project />} />
            <Route path="about" element={<About />} />
            {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
