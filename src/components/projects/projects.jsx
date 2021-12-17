import React from 'react';
import './projects.css'
const Projects = () => {
    return (
        <div id='projects' className="projects">
            <div className="p-wrapper">
                <div className="p-grid">
                    <div className="p-left">
                        <div className='p-txt-item'><span>Projects.</span></div>
                    </div>
                    <div className="p-right">
                        <div className="p-row">
                            <div className="p-col"><span>1</span></div>
                            <div className="p-col img"><img src='https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/12/Bose-Headphones-700-Gear-Patrol-Ambiance-3.jpg'/></div>
                        </div>
                        <div className="p-row">
                            <div className="p-col img"><img src='https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/283020281/mcdonalds-menu-dessert-cone.jpg'/></div>
                            <div className="p-col"><span>2</span></div>
                        </div>
                        <div className="p-row">
                            <div className="p-col"><span>3</span></div>
                            <div className="p-col img"><img src='https://www.windowscentral.com/sites/wpcentral.com/files/styles/larger/public/field/image/2021/11/windows-11-se-wallpaper-microsoft.jpg'/></div>
                        </div>
                        <div className="p-row">
                            <div className="p-col img"><img src='https://www.androidauthority.com/wp-content/uploads/2021/06/windows-11-wallpaper-4-1200x675.jpg'/></div>
                            <div className="p-col"><span>4</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;