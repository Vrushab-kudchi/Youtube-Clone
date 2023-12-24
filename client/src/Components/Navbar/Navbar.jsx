import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiVideoAddLine } from 'react-icons/ri';
import { BiUserCircle} from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import logo from './logo.png';
import SearchBar from './SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@leecheuk/react-google-login'
import { gapi } from 'gapi-script'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/auth';
import Auth from '../../Pages/Auth/Auth';

export default function Navbar({ toggleDrawer,setcreateEditChannelbtn }) {
  
  const [authBtn, setAuthBtn] = useState(false);

  const dispatch = useDispatch();
  //const currentUser = null;
  // const currentUser = {
  //   result: {
  //     email: 'Daylink@test.com',
  //   },
  // };
  const currentUser = useSelector((state) => state.currentUser);
  
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '966205500692-7o62s4r80usv26ivolhme2nmjl6viit9.apps.googleusercontent.com',
        scope: 'email'
    })
    }
    gapi.load("client:auth2",start)
  },
  [])

  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({ email: Email }));
  };

  
  const onFailure = (response) => {
    console.log("Failed", response);
  };

  return (
    <>
      <nav className='navbar_container'>
        <RxHamburgerMenu className='hamburger' onClick={toggleDrawer} />
        <Link to={'/'} className='logo_container'>
          <img src={logo} alt='Logo' className='logo' />
          <p className='logoText'>YouTube</p>
        </Link>
        <SearchBar />
        <div className='icons'>
          <RiVideoAddLine size={22} className='vid_bell_Navbar' />
          <div className='apps_Box'>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
            <p className='appBox'></p>
          </div>
          <IoNotificationsOutline size={22} className='vid-bell-Navbar' />
          <div className='Auth_cont_Navbar'>
            {currentUser ? (
              <div className='channel_logo_App' onClick={() => setAuthBtn(true)}>
                <p className='fstChar_logo_App'>
                  {currentUser?.result.name ? (
                    currentUser?.result.name.charAt(0).toUpperCase()
                  ) : (
                    currentUser?.result.email.charAt(0).toUpperCase()
                  )}
                </p>
              </div>
            ) : (
                <>
                  <GoogleLogin
                    clientId={"966205500692-7o62s4r80usv26ivolhme2nmjl6viit9.apps.googleusercontent.com"}
                   onSuccess={onSuccess}
                    onFailure={onFailure}
                    render={(renderProps) => (
                <p onClick={renderProps.onClick} className="Auth_Btn">
                {/* <p onClick={logTmp} className="Auth_Btn"> */}
                  <BiUserCircle size={22} />
                  <b>Sign in</b>
                </p>
               )}
                  />

              </>
            )}
          </div>
        </div>
      </nav>
      {authBtn &&
        <Auth
        setcreateEditChannelbtn={setcreateEditChannelbtn}
        setAuthBtn={setAuthBtn}
          User={currentUser}
        />
      }
    </>
  );
}
