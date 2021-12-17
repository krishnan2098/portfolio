import React from 'react';
import './blog.css'

const Blog = () => {
    return (
        <div id="blog" className="blog">
            {/* <h1>Blog</h1> */}
            <div className="b-wrapper">
                <div className="b-row">
                    <div className="b-col-lg">
                        <div className="popular-post">
                            <div className="post-row">
                                <div className="post-img">
                                    <img src="https://www.bing.com/th?id=OHR.GlowWormBMNP_EN-US9968994144_1920x1080.jpg"/>
                                </div>
                            </div>                        
                            <div className="post-row meta">
                                <div className="post-date"><div><span>Feb 11</span></div></div>
                                <div className="post-author"><span>Al Pachino</span></div>
                            </div>
                            <div className="post-row">
                                <div className="post-heading"><h2>This is sample heading for a post</h2></div>
                            </div>
                            <div className="post-row">
                                <div className="post-summary"><p>This is a sample summary for the post. Summary is usually used to summarise the entire post. In the context of design they are trimmed starters of the post</p></div>
                            </div>                        
                        </div>
                    </div>
                    <div className="b-col">
                        <div className="suggested-post">
                            <div className="post-row">
                                <div className="post-img">                                    
                                    <img src="https://www.bing.com/th?id=OHR.USSBowfin_EN-US9736688640_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"/>
                                </div>
                            </div>                        
                            <div className="post-row meta">
                                <div className="post-date"><span>Feb 11</span></div>
                                <div className="post-author"><span>Al Pachino</span></div>
                            </div>
                            <div className="post-row">
                                <div className="post-heading"><h2>This is sample heading for a post</h2></div>
                            </div>
                            <div className="post-row">
                                <div className="post-summary"><p>This is a sample summary for the post. Summary is usually used to summarise the entire post. In the context of design they are trimmed starters of the post</p></div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;