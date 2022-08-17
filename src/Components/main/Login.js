import React, { useState, Fragment } from "react";
// import { Redirect } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
//globe state
import { loginUser, useAuthState, useAuthDispatch } from "../../Context";

const Login = (props) => {
  const [show, setShow] = useState(false);
  const setOn = () => {
    setShow(!show);
  };

  // const newStyle = show ? "display-block" : "display-none";
  const newStyle = show ? "v_v" : "v_h";

  const cardStyle = {
    height: show ? 0 : "250px",
    opacity: show ? 0 : 1,
    transition: "all .5s ease-in"
  };

  const cardStylea = {
    opacity: show ? 1 : 0,
    height: show ? "250px" : 0,
    transition: "all .5s ease-in",
  };

  //globe state ex:loginUser(dispatch, formList);
  const dispatch = useAuthDispatch();
  const { errorMessage, IsLogin } = useAuthState();
  // const formInitial = { userno: "", password: "" };
  const formInitial = { email: "", password: "" };
  const [formList, setFormList] = useState(formInitial);

  // login err msg
  const initalMsg = { messclass: "alert alert-danger", message: " " };
  const [loginMessage] = useState(initalMsg);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormList({ ...formList, [name]: value });
  };

  const regformInitial = { userno: "", passwordr: "" };
  const [regformList, setregFormList] = useState(regformInitial);
  const handleInputChangea = (e) => {
    const { name, value } = e.target;
    setregFormList({ ...regformList, [name]: value });
  };
  let navigate = useNavigate();
  const handleLogin = async (e) => {
    console.log("handleLogin");
    e.preventDefault();
   
    try {
      const response = await loginUser(dispatch, formList);
      if (!response.token) return;
      // props.history.push("/about");
      navigate('/about')
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (e) => {
    console.log("handleRegister");
    e.preventDefault();
  };

  return (
    <>
      {IsLogin ? (
        <Navigate to="/PrForm" />
      ) : (
        <div className="login_form">
          {/* <p>{!data ? "Loading..." : data}</p> */}

          <Fragment>
            <div className="form">
              <form
                style={cardStylea}
                className={"flip-card register-form " + newStyle}
                id="myForm1"
              >
                  <input
                    type="text"
                    id="userno"
                    name="userno"
                    value={regformList.userno}
                    onChange={handleInputChangea}
                    placeholder="userno"
                  />

                  <input
                    type="password"
                    id="passwordr"
                    name="passwordr"
                    value={regformList.passwordr}
                    onChange={handleInputChangea}
                    placeholder="密碼"
                  />
 

                <button
                  type="button"
                  className="btn btn-primary register_btn"
                  onClick={handleRegister}
                >
                  create
                </button>

                <p className="message">
                  Already registered?
                  <a href="#" onClick={setOn}>
                    Sign In
                  </a>
                </p>
              </form>

              <form style={cardStyle}>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formList.email}
                    onChange={handleInputChange}
                  />
        
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formList.password}
                    onChange={handleInputChange}
                  />
    

                

                <button
                  id="login_btn"
                  type="button"
                  className="btn btn-primary login_btn"
                  onClick={handleLogin}
                >
                  login
                </button>

                <p className="message">
                  Not registered?{" "}
                  <a href="#" onClick={setOn}>
                    Create an account
                  </a>
                </p>

    
                {errorMessage ? (
                  <p className={initalMsg.messclass}>{errorMessage}</p>
                ) : null}
              </form>
            </div>
          </Fragment>
        </div>
      )}
    </>
  );
};
export default Login;
