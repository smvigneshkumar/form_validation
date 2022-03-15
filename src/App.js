import "./styles.css";
import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [lastName, setLastName] = useState("");
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const isNameValid = firstName.trim() !== "";
  const isLastNameValid = lastName.trim() !== "";
  const isEmailValid = email.includes("@");

  let isFormValid =
    isNameValid && isEmailValid && isLastNameValid ? true : false;
  const nameInputIsValid = !isNameValid && isNameTouched;
  const lastNameInputIsValid = !isLastNameValid && isLastNameTouched;
  const emailInputIsValid = !isEmailValid && isEmailTouched;

  const onFirstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
    setIsNameTouched(true);
  };

  const onLastNameChangeHandler = (event) => {
    setLastName(event.target.value);
    setIsLastNameTouched(true);
  };

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
    setIsEmailTouched(true);
  };

  const onFirstNameBlur = () => {
    setIsNameTouched(true);
  };

  const onLastNameBlur = () => {
    setIsLastNameTouched(true);
  };

  const onEmailBlur = () => {
    setIsEmailTouched(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsNameTouched(true);
    setIsLastNameTouched(true);
    setIsEmailTouched(true);
    if (!isNameValid || !isLastNameValid || !isEmailValid) {
      return;
    }
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsNameTouched(false);
    setIsLastNameTouched(false);
    setIsEmailTouched(false);
  };

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={onFirstNameChangeHandler}
            onBlur={onFirstNameBlur}
          />
          {nameInputIsValid && (
            <p className="error-text">First name is not valid</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={onLastNameChangeHandler}
            onBlur={onLastNameBlur}
          />
          {lastNameInputIsValid && (
            <p className="error-text">Last name is not valid</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={onEmailChangeHandler}
            onBlur={onEmailBlur}
          />
          {emailInputIsValid && (
            <p className="error-text">Email is not valid</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
}
