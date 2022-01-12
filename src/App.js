import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import './App.css';

// Reference: https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed=&file=/src/Example.tsx:197-520
// Reference: https://www.framer.com/docs/examples/#exit-animations

const LightTheme = {
  pageBackground: '#f5f5f5',
  textColor: '#202020',
  titleColor: '#FC6D6D',
  highlightColor: '#FC6D6D',
  navmenuBackground: '#fff',
  navmenuHighlightColor: '#efefef',
  blogDividerColor: '#0c0c0c',
  scrollBorderColor: '#fff',
  scrollThumbColor: '#505050',
  galleryImgNumColor: '#efefef',
  galleryBorderColor: '#efefef',
  iconHover: '#0c0c0c',
  inputBackground: '#d4d4d4',
  inputFocusColor: '#d5d5d5',
  inputBorderColor: '#000',
};

const DarkTheme = {
  pageBackground: '#000',
  textColor: '#bfc4cc',
  titleColor: '#FC6D6D',
  highlightColor: '#FC6D6D',
  navmenuBackground: '#101010',
  navmenuHighlightColor: '#0c0c0c',
  blogDividerColor: '#bfc4cc',
  scrollBorderColor: '#000',
  scrollThumbColor: '#bfc4cc',
  galleryImgNumColor: '#303030',
  galleryBorderColor: '#202020',
  iconHover: '#efefef',
  inputBackground: '#131313',
  inputFocusColor: '#202020',
  inputBorderColor: '#bfc4cc',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const App = () => {
  let pages = ['Home', 'Projects', 'Blog', 'Contact'];
  let [[page, direction], setPage] = useState([0, 0]);

  const PageIndex = wrap(0, pages.length, page);

  const paginate = (newPage) => {
    let newDirection;
    if(newPage > page) {
      newDirection = 1;
    } else {
      newDirection = -1;
    }
    setPage([newPage, newDirection]);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const updateTheme = (theme) => {
    document.documentElement.style.setProperty(
      '--pageBackground',
      theme.pageBackground
    );
    document.documentElement.style.setProperty('--textColor', theme.textColor);
    document.documentElement.style.setProperty(
      '--titleColor',
      theme.titleColor
    );
    document.documentElement.style.setProperty(
      '--highlightColor',
      theme.highlightColor
    );
    document.documentElement.style.setProperty(
      '--navmenuBackground',
      theme.navmenuBackground
    );
    document.documentElement.style.setProperty(
      '--navmenuHighlightColor',
      theme.navmenuHighlightColor
    );
    document.documentElement.style.setProperty(
      '--blogDividerColor',
      theme.blogDividerColor
    );
    document.documentElement.style.setProperty(
      '--scrollBorderColor',
      theme.scrollBorderColor
    );
    document.documentElement.style.setProperty(
      '--scrollThumbColor',
      theme.scrollThumbColor
    );
    document.documentElement.style.setProperty(
      '--galleryImgNumColor',
      theme.galleryImgNumColor
    );
    document.documentElement.style.setProperty(
      '--galleryBorderColor',
      theme.galleryBorderColor
    );
    document.documentElement.style.setProperty('--iconHover', theme.iconHover);
    document.documentElement.style.setProperty(
      '--inputBackground',
      theme.inputBackground
    );
    document.documentElement.style.setProperty(
      '--inputFocusColor',
      theme.inputFocusColor
    );
    document.documentElement.style.setProperty(
      '--inputBorderColor',
      theme.inputBorderColor
    );
  };

  const [theme, setTheme] = useState('dark');
  return (
    <ThemeProvider theme={themes[theme]}>
      <div className='app'>
        <div className='app-wrapper'>
          <Header
            theme={theme}
            themes={themes}
            updateTheme={updateTheme}
            setTheme={setTheme}
          />

          <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
            <motion.div
              className='app-section'
              key={page}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              {PageIndex === 0 ? <Home /> : null}
              {PageIndex === 1 ? <Projects /> : null}
              {PageIndex === 2 ? <Blog /> : null}
              {PageIndex === 3 ? <Contact /> : null}
            </motion.div>
          </AnimatePresence>
          <Footer setPage={paginate} pages={pages} currentPageIndex={pages.indexOf(page)} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
