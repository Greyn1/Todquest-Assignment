import './App.css';

const App = () => {

  const handleSubmit = (evt) => {
    alert('login successfull! unfortunately there is only 1 page in this website. Enjoy!')
  }
  return (
    <div className="App">
      <div className="left-polygon"></div>
      <div className="right-polygon">
        <form onSubmit={handleSubmit}>
          <header>
            <span>ALREADY MEMBERS</span>
            <span>Need Help?</span>
          </header>
          <div className='shadow'></div>
          <div className='inputs'>
            <input type='email' placeholder='Enter your Email' />
            <input type='password' placeholder='Enter your Password' />
            <button type='submit'>SIGN IN</button>
          </div>
        </form>
        <div className='below-form'>
          <div>Don't have an account yet ?</div>
          <div className='teal-color'>Create an account</div>
        </div>
      </div>
    </div>
  );
}

export default App;
