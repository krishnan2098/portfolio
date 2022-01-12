import './home.css';

const Home = (props) => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-txt-item'>
          <span>Hello.</span>
        </div>
        <div className='i-title-wrapper'>
          <div className='i-title'>
            <h1 className='i-name'>
              I am Shankar. My home is located in bash terminal of the Linux
              environment for the past 6 years. I speak python and Bash
              fluently.
            </h1>
            <div className='i-title-item'>
              Web Developer | DevOps Engineer{' '}
            </div>
          </div>
        </div>
      </div>
      <div className='i-center'>{/* center */}</div>
      <div className='i-right'>{/* right */}</div>
    </div>
  );
};

export default Home;
