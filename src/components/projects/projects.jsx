import { ProjectsData } from './projectsData';
import './projects.css';

const Projects = (props) => {
  let col_1 = [<div key={-1} className='p-offset-cell'></div>];
  let col_2 = [(
    <div key={0} className='p-cell' style={{ height: "40vh" }}>
      <div className="p-details">
        <div className='p-cell-title'>
          <p style={{ margin: '1vh 0.5vw' }}>{ProjectsData[0].title}</p>
        </div>
        <div className='p-cell-id' style={{ height: '10vh' }}>
          <p style={{ margin: '1vh 0.5vw' }}>1</p>
        </div>
      </div>
      <div className='p-cell-img'>
        <img src={ProjectsData[0].url} alt={ProjectsData[0].title} />
      </div>
    </div>
  )];
  let ele;
  for (var i = 1; i < ProjectsData.length; i++) {
    ele = (
      <div key={i} className='p-cell'>
        <div className="p-details">
          <div className='p-cell-title'>
            <p style={{ margin: '1vh 0.5vw' }}>{ProjectsData[i].title}</p>
          </div>
          <div className='p-cell-id'>
            <p style={{ margin: '1vh 0.5vw' }}>{i + 1}</p>
          </div>
        </div>
        <div className='p-cell-img'>
          <img src={ProjectsData[i].url} alt={ProjectsData[i].title} />
        </div>
      </div>
    )

    if (i % 2 === 0) {
      col_2.push(ele);
    } else {
      col_1.push(ele);
    }
  }

  return (
    <div id='projects' className='projects'>
      <div className='p-wrapper'>
        <div className='p-grid'>
          <div className='p-left'>
            <div className='p-txt-item'>
              <span>Projects.</span>
            </div>
            <div className='i-title-wrapper'>
              <div className='i-title'>
                <h1 className='i-name'>
                  “Creativity is nothing but a mind set free.”
                </h1>
                <div className='i-title-item'>
                  – Torrie T. Asai
                </div>
              </div>
            </div>
          </div>
          <div className='p-center'>{/* right */}</div>
          <div className='p-right'>
            <div className="p-col-1">
              {col_1}
            </div>
            <div className="p-col-2">
              {col_2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
