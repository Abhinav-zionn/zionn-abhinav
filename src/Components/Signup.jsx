import React, { useState } from "react";
import signuppic from "../assets/helloworld.gif";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import Button2 from "./Button2";
import errorpic from "../assets/InvalidEmail.gif";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { LinkedIn } from "react-linkedin-login-oauth2";
// import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { useLinkedIn } from "react-linkedin-login-oauth2";

const clientId = "Your-Client-Id";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showloginButton, setShowloginButton] = useState(true);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };
  const signupfun = (e) => {
    e.preventDefault();
    if (name == "") {
      alert("please enter name");
      return;
    }
    if (email == "") {
      alert("please enter email");
      return;
    }
    if (phone == "") {
      alert("please enter phone number");
      return;
    }
  };
  const setemail = (e) => {
    e.preventDefault();
    const em = e.target.value;
    if (em.indexOf("@") == -1) {
      setError("true");
      return;
    } else setError("");
    setEmail(e.tar);
  };
  const submitform = (e) => {
    e.preventDefault();
  };
  const { linkedInLogin } = useLinkedIn({
    clientId: "77qisj69i1ypcb",
    // redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col order-2 order-lg-1">
            <div className="con-image">
              {error ? (
                <img className="img-signup" src={errorpic} alt="signuppic" />
              ) : (
                <img className="img-signup" src={signuppic} alt="signuppic" />
              )}
            </div>
          </div>
          <div className="txt col pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
            <form onSubmit={submitform}>
              <div className="inp-css">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="butto-2"
                  placeholder="full name"
                />
              </div>
              <div className="inp-css">
                <input
                  onChange={setemail}
                  type="email"
                  className="butto-2"
                  placeholder="email"
                />
              </div>
              <div className="inp-css">
                <input
                  onChange={(e) => {
                    setPhone(e.value);
                  }}
                  type="tel"
                  className="butto-2"
                  placeholder="phone #"
                />
              </div>
              <div className="inp-css">
                <input
                  onChange={(e) => {
                    setPassword(e.value);
                  }}
                  type="password"
                  className="butto-2"
                  placeholder="password"
                />
              </div>
              <p className="txt-2">sign up using </p>
              <div>
                <div className="container">
                  <div className="row social-tab">
                    <div className="col">
                      <GoogleLogin
                        clientId={clientId}
                        // buttonText=""
                        render={(renderProps) => (
                          <button
                            className="social-btn"
                            onClick={renderProps.onClick}
                          >
                            <img className="social-media-google" src={google} />
                          </button>
                        )}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                      />
                    </div>
                    <div className="col">
                      <button className="social-btn">
                        <img
                          className="social-media-linkedin"
                          onClick={linkedInLogin}
                          src={linkedin}
                          alt="Sign in with Linked In"
                          style={{ maxWidth: "180px", cursor: "pointer" }}
                        />
                        {/* <img className="social-media-linkedin" src={linkedin} /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sign-btn">
                <input
                  type="submit"
                  className="btn-2-su"
                  value="sign up"
                  onClick={signupfun}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
