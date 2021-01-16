import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/langfr-1920px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="Password"
          />
          <button onClick={login} className="login__signIn" type="submit">
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's{" "}
          <a href="#"> Conditions of Use and Privacy Notice.</a>
        </p>
        <button onClick={register} className="login__register">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
