import React from "react";
import "./Auth.css";
import { GoogleLogout } from "@leecheuk/react-google-login";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import { Link } from "react-router-dom";

export default function Auth({ User, setAuthBtn, setcreateEditChannelbtn }) {
  const dispatch = useDispatch();
  const onLogOutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Logged Out Successfull");
  };
  return (
    <>
      <div className="Auth_container" onClick={() => setAuthBtn(false)}>
        <div className="Auth_container2">
          <p className="User_Details">
            <div className="chanel_logo_App">
              <p className="fstChar_logo_App">
                {User?.result.name ? (
                  <>{User?.result.name.charAt(0).toUpperCase()} </>
                ) : (
                  <>{User?.result.email.charAt(0).toUpperCase()} </>
                )}
              </p>
            </div>
            <div className="email_Auth">{User?.result.email}</div>
          </p>
          <div className="btns_Auth">
            {User?.result.name ? (
              <>
                {
                  <Link
                    to={`/channelpage/${User?.result._id}`}
                    className="btn_Auth"
                  >
                    Your Channel
                  </Link>
                }
              </>
            ) : (
              <>
                <input
                  type="Submit"
                  value={"Create Your Channel"}
                  className="btn_Auth"
                  onClick={() => setcreateEditChannelbtn(true)}
                />
              </>
            )}

            <div>
              <GoogleLogout
                clientId={
                  "966205500692-7o62s4r80usv26ivolhme2nmjl6viit9.apps.googleusercontent.com"
                }
                onLogoutSuccess={onLogOutSuccess}
                render={(renderProps) => (
                  <div onClick={renderProps.onClick} className="btn_Auth">
                    <BiLogOut />
                    Log Out
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
