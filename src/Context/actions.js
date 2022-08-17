import Singleton from "../Singleton";
//真正去api取資料，再進行後續動作

const ROOT_URL = `https://reqres.in/api/login`;

export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginPayload),
    };
    console.log(loginPayload);

    try {
      dispatch({ type: "REQUEST_LOGIN" });
      let response = await fetch(`${ROOT_URL}`, requestOptions);
      let data = await response.json();
      console.log(data); //{token: 'QpwL5tke4Pnpja7X4'}

      if (data.token) { 
        const logindata = {userno: "000002", IsLogin: "true", loading: false}
        dispatch({ type: "LOGIN_SUCCESS", payload: logindata });
        localStorage.setItem("currentUser", JSON.stringify(logindata));
        return logindata;
      }

      dispatch({ type: "LOGIN_ERROR", error: data.error});
      return;

    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", error: error });
    }

}



export async function logOut(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
