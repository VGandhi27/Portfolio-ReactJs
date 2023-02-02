import React from 'react'
import { BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Blog from "./routes/Blog"
import Contact from './routes/Contact'
import Project from './routes/Project'
import Skills from './routes/Skills'
import Timelines from './routes/Timelines'



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
            <Route path="timelines" element={<Timelines />} />
            <Route path="skills" element={<Skills />} />
            <Route path="*" element={<Navigate to="/"/>} />
           
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
