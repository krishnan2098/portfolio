import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { ThemeProvider } from 'styled-components';
import './App.css';

const LightTheme = {
  pageBackground: "#fff",
  textColor: "#202020",
  titleColor: "#FC6D6D",
  highlightColor: "#FC6D6D",
  navmenuBackground: "#fff",
  navmenuHighlightColor: "#efefef",
  blogDividerColor: "#0c0c0c",
  scrollBorderColor: "#fff",
  scrollThumbColor: "#505050",
  galleryImgNumColor: "#efefef",
  galleryBorderColor: "#efefef",
  iconHover: "#0c0c0c",
};

const DarkTheme = {
  pageBackground: "#000",
  textColor: "#bfc4cc",
  titleColor: "#FC6D6D",
  highlightColor: "#FC6D6D",
  navmenuBackground: "#101010",
  navmenuHighlightColor: "#0c0c0c",
  blogDividerColor: "#bfc4cc",
  scrollBorderColor: "#000",
  scrollThumbColor: "#bfc4cc",
  galleryImgNumColor: "#303030",
  galleryBorderColor: "#202020",
  iconHover: "#efefef",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme
};

const App = () => {
  const updateTheme = (theme) => {
    document.documentElement.style.setProperty('--pageBackground', theme.pageBackground);
    document.documentElement.style.setProperty('--textColor', theme.textColor);
    document.documentElement.style.setProperty('--titleColor', theme.titleColor);
    document.documentElement.style.setProperty('--highlightColor', theme.highlightColor);
    document.documentElement.style.setProperty('--navmenuBackground', theme.navmenuBackground);
    document.documentElement.style.setProperty('--navmenuHighlightColor', theme.navmenuHighlightColor);
    document.documentElement.style.setProperty('--blogDividerColor', theme.blogDividerColor);
    document.documentElement.style.setProperty('--scrollBorderColor', theme.scrollBorderColor);
    document.documentElement.style.setProperty('--scrollThumbColor', theme.scrollThumbColor);
    document.documentElement.style.setProperty('--galleryImgNumColor', theme.galleryImgNumColor);
    document.documentElement.style.setProperty('--galleryBorderColor', theme.galleryBorderColor);
    document.documentElement.style.setProperty('--iconHover', theme.iconHover);
  }

  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={themes[theme]}>
      <div className='app'>
        <div className='app-wrapper'>
          <Router>
            <Navbar theme={theme} themes={themes} updateTheme={updateTheme} setTheme={setTheme} />
            <Routes>
              <Route path='/' element={<Intro />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </ThemeProvider>
    );
}

export default App;
