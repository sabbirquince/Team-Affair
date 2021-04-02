import React, { useContext, useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../App";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle,
} from "./FirebaseLoginManager";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  //////////// USER STATES ///////////
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  ///////// is new user? /////////
  const [newUser, setNewUser] = useState(false);

  ///////// redirect to the previous page //////////
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const { register, handleSubmit, errors } = useForm();

  ///////// sign up or in with email & password ///////
  const onSubmit = (inputData) => {
    console.log(inputData);

    // if new user
    if (newUser) {
      createUserWithEmailAndPassword(
        inputData.name,
        inputData.email,
        inputData.password
      ).then((result) => {
        setLoggedIn(result);
        setTimeout(() => {
          history.replace(from);
        }, 1500);
      });
    }
    // if existing user
    if (!newUser) {
      signInWithEmailAndPassword(inputData.email, inputData.password).then(
        (result) => {
          setLoggedIn(result);
          setTimeout(() => {
            history.replace(from);
          }, 1500);
        }
      );
    }
  };

  ////////// sign up or in google ///////////
  const googleSignIn = () => {
    signInWithGoogle().then((result) => {
      setLoggedIn(result);
      setTimeout(() => {
        history.replace(from);
      }, 1500);
    });
  };

  ////////// sign up or in with facebook ///////////
  const facebookSignIn = () => {
    signInWithFacebook().then((result) => {
      setLoggedIn(result);
      setTimeout(() => {
        history.replace(from);
      }, 1500);
    });
  };

  ///////////////////////////////////// JSX /////////////////////////////////////////\

  return (
    <div className="login">
      <h2 className="text-center p-2">Login</h2>
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Name input field  */}
        {newUser && (
          <input
            className="input-field"
            name="name"
            placeholder="Type Your Name"
            ref={register}
          />
        )}

        <input
          className="input-field"
          placeholder="Type Your Email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && (
          <span className="input-error">This field is required</span>
        )}

        <input
          className="input-field"
          placeholder="Type Your Password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && (
          <span className="input-error">This field is required</span>
        )}

        <input className="input-field" type="submit" />

        <div>
          <input
            onChange={() => setNewUser(!newUser)}
            type="checkbox"
            name="newUser"
            id="newUser"
          />
          <label htmlFor="newUser">Sign Up</label>
        </div>
      </form>

      <div className="social-signin">
        <button onClick={googleSignIn} className="social-btn">
          Sing In with Google
        </button>
        <button onClick={facebookSignIn} className="social-btn">
          Sing In with Facebook
        </button>
      </div>

      {loggedIn?.message === true && (
        <div className="text-success bg-dark text-center">
          <p>Log in successful</p>
        </div>
      )}

      {loggedIn?.message === false && (
        <div className="text-danger bg-dark text-center">
          <p>
            Either Email or Password is wrong. You might not have an account.
            Try again or create one!
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
