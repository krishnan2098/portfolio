import React from 'react';
import './blog.css'

const Blog = () => {
    return (
        <div id="blog" className="blog">
            <div className="b-section">
                <div className="b-wrapper">
                    <div className="b-left">
                        <div className="b-row-lg">
                            <div className="post-img-lg">
                                <img className="thumbnail" src="https://www.bing.com/th?id=OHR.USSBowfin_EN-US9736688640_1920x1080.jpg&rf=LaDigue_1920x1080.jpg" alt="post-img" />
                            </div>
                            <div className="post-meta">
                                <span className="meta-col post-date">11 Dec</span>
                                <span className="meta-col post-author">Al Pacino</span>
                            </div>
                            <div className="post-header"><h1>Popular Post Heading </h1></div>
                            <div className="post-subheading"><p>Enter the world of subheading of Popular Post</p></div>
                        </div>
                    </div>
                    <div className="b-right">
                        <div className="b-row">
                            <div className="post-img">
                                <img className="thumbnail" src="https://www.bing.com/th?id=OHR.GlowWormBMNP_EN-US9968994144_1920x1080.jpg" alt="post-img" />
                            </div>
                            <div className="post-meta">
                                <span className="meta-col popular post-date">11 Dec</span>
                                <span className="meta-col popular post-author">Al Pacino</span>
                            </div>
                            <div className="post-header"><h4>Popular Post Heading </h4></div>
                            <div className="popular post-subheading"><p>Enter the world of subheading of Popular Post</p></div>
                        </div>
                        <div className="b-row">
                            <div className="post-img">
                                <img className="thumbnail" src="https://www.bing.com/th?id=OHR.GlowWormBMNP_EN-US9968994144_1920x1080.jpg" alt="post-img" />
                            </div>
                            <div className="post-meta">
                                <span className="meta-col popular post-date">11 Dec</span>
                                <span className="meta-col popular post-author">Al Pacino</span>
                            </div>
                            <div className="post-header"><h4>Popular Post Heading </h4></div>
                            <div className="popular post-subheading"><p>Enter the world of subheading of Popular Post</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;