import './MainDiv.css'
import { useNavigate } from 'react-router-dom';

const MainDiv = () => {
  const navigate=useNavigate();

  return (
    <div className='maindiv'>
        <div className='bgdiv'>
        <img
            src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png"
            alt="lool"
          />
        </div>
        <div className="headerdiv">
          <img
            onClick={()=>navigate('/')}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <div className="buttonsdiv">
            <button>English</button>
            <button onClick={()=>navigate('/login')}>Sign In</button>
          </div>
        </div>
        <div className="bodydiv">
          <span className='large'>Unlimited movies, TV</span>
          <span className='large'>shows and more.</span>
          <span className='medium'>Watch anywhere. Cancel anytime.</span>
          <span className='small'>Ready to watch? Enter your email to create or restart your membership.</span>
          <div>
            <input placeholder='Email Address' type={'email'} name={'email'}/>
            <button onClick={()=>navigate('/home')}>Get Started</button>
          </div>
        </div>
      </div>
  )
}

export default MainDiv;