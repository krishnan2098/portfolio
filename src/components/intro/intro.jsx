import './intro.css'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <div className="i-greet-wrapper">
                        <div className='i-dyn-txt'>
                            <div className='i-dyn-txt-item'><span>Hello.</span></div>
                            <div className='i-dyn-txt-item'><span>नमस्ते.</span></div>
                            <div className='i-dyn-txt-item'><span>કેમ છો.</span></div>
                            <div className='i-dyn-txt-item'><span>こんにちわ.</span></div>
                            <div className='i-dyn-txt-item'><span>Hola.</span></div>
                        </div>  
                    </div>
                    <div className="i-title-wrapper">
                        <div className="i-title">
                            <h1 className="i-name">I am Shankar. My home is located in bash terminal of the Linux environment for the past 6 years. I speak python and Bash fluently.</h1>
                            <div className="i-title-item">Web Developer | DevOps Engineer </div>
                            {/* <div className="i-title-item"></div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="i-right">
                right
            </div>
        </div>
    )
}

export default Intro