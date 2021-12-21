import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import Blog from "./components/blog/blog";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";

const LightTheme = {
  pageBackground: "#f5f5f5",
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
  inputBackground: "#d4d4d4",
  inputFocusColor: "#d5d5d5",
  inputBorderColor: "#000",
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
  inputBackground: "#131313",
  inputFocusColor: "#202020",
  inputBorderColor: "#bfc4cc",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const App = () => {
  const location = useLocation();
  const updateTheme = (theme) => {
    document.documentElement.style.setProperty(
      "--pageBackground",
      theme.pageBackground
    );
    document.documentElement.style.setProperty("--textColor", theme.textColor);
    document.documentElement.style.setProperty(
      "--titleColor",
      theme.titleColor
    );
    document.documentElement.style.setProperty(
      "--highlightColor",
      theme.highlightColor
    );
    document.documentElement.style.setProperty(
      "--navmenuBackground",
      theme.navmenuBackground
    );
    document.documentElement.style.setProperty(
      "--navmenuHighlightColor",
      theme.navmenuHighlightColor
    );
    document.documentElement.style.setProperty(
      "--blogDividerColor",
      theme.blogDividerColor
    );
    document.documentElement.style.setProperty(
      "--scrollBorderColor",
      theme.scrollBorderColor
    );
    document.documentElement.style.setProperty(
      "--scrollThumbColor",
      theme.scrollThumbColor
    );
    document.documentElement.style.setProperty(
      "--galleryImgNumColor",
      theme.galleryImgNumColor
    );
    document.documentElement.style.setProperty(
      "--galleryBorderColor",
      theme.galleryBorderColor
    );
    document.documentElement.style.setProperty("--iconHover", theme.iconHover);
    document.documentElement.style.setProperty(
      "--inputBackground",
      theme.inputBackground
    );
    document.documentElement.style.setProperty(
      "--inputFocusColor",
      theme.inputFocusColor
    );
    document.documentElement.style.setProperty(
      "--inputBorderColor",
      theme.inputBorderColor
    );
  };

  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={themes[theme]}>
      <div className="app">
        <div className="app-wrapper">
          <Navbar
            theme={theme}
            themes={themes}
            updateTheme={updateTheme}
            setTheme={setTheme}
          />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Intro />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
