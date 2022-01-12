import { motion } from 'framer-motion';
import { SocialsData } from './socialsData';
import './footer.css';

const Footer = (props) => {
  const handleNavItemClick = (dir) => {
    props.setPage(dir)
  }

  return (
    <footer>
      <div className='f-wrapper'>
        <div className='f-row'>
          <div className='f-col'>
            <span className='developed-by'>Designed and Developed by Shankar</span>
          </div>
        </div>
        <div className='f-row list'>
          {props.pages.map(function (page, i) {
            return (
              <motion.div 
              key={i} 
              data-id={i} 
              className='f-col' 
              onClick={() => handleNavItemClick(i)}>
                <span className={props.currentPageIndex === i ? 'nav-item-active' : 'nav-item'}>{page}</span>
              </motion.div>
            )
          })}
        </div>
        <div className='f-row list socials'>
          {SocialsData.map((social, i) => (
            <div key={i} className='social-icon f-col'>
              <motion.a
                whileHover={{ scale: 1.5, color: "#FC6D6D" }}
                href={social.url}
              >
                {social.icon}
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
