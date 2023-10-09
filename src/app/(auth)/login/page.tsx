import React from "react";

const page = () => {
  return (
    <div className="auth">
      <div className="auth__box">
        <form action="">
          <h2>Login</h2>
          <div className="form__group">
            <div className="input__box">
              <span className="borderline"></span>
              <input type="text" />
              <label htmlFor="">Username</label>
            </div>
            <div className="input__box">
              <input type="text" />
              <label htmlFor="">Password</label>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="auth__link">
          <a href="#">Forgot Password</a>
          <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default page;
