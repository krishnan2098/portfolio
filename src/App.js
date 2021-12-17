import Navbar from './components/navbar/navbar'
import Intro from './components/intro/intro'
import Projects from './components/projects/projects'
import Blog from './components/blog/blog'
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'></Route>
        </Routes>
      </Router>
      <div className='app-wrapper'>
        {/* <div className='app-row' style={{ backgroundColor: "black"}}>
          <div className='app-col'>
            <Intro/>
          </div>
        </div> */}
        {/* <div className='app-row'>
          <div className='app-col'>
            <Navbar/>
          </div>
        </div> */}
        <div className='app-row'>
          <div className='app-col'>
            <Projects/>
            <Footer/>
          </div>
        </div>
        <div className='app-row'>
          <div className='app-col a-blog'>
            <Blog/>
            <Footer/>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
    );
}

export default App;
