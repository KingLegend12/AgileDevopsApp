import React, { useState } from "react";
import "./Entry.style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../password-reset/PasswordReset.comp";
const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Veuillez remplir les champs");
    }
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Veuillez remplir les champs");
    }
    console.log(email);
  };

  const frmSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmSwitcher={frmSwitcher}
            email={email}
            pass={password}
          />
        )}
        {frmLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            frmSwitcher={frmSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
};

export default Entry;
