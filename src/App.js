import Navbar from './components/navbar/navbar'
import Intro from './components/intro/intro'
import Projects from './components/projects/projects'
import Blog from './components/blog/blog'
import Footer from './components/footer/footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/portfolio/' element={<Intro />} />
          <Route path='/portfolio/blog' element={<Blog />} />
          <Route path='/portfolio/projects' element={<Projects />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
    );
}

export default App;
