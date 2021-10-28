import "./register.css";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { registerCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Register() {
  const { isFetching, dispatch } = useContext(AuthContext);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const loginPageMoveHandler = () => {
    history.push(`/login`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      alert("Passwords don't match!");
      //passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };
      registerCall(user, dispatch);

      // try {
      //   await axiosInstance.post("/auth/register", user);
      //   history.push("/login");
      // } catch (err) {
      //   console.log(err);
      // }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Dylan SNS</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Dylan SNS.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Sign Up"
              )}
            </button>
            {/* <button className="loginButton" type="submit">
              Sign Up
            </button> */}
            <button
              className="loginRegisterButton"
              type="button"
              onClick={loginPageMoveHandler}
            >
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
