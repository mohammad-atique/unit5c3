import { useState } from "react";
import axios from "axios";
export const Login = () => {
    //  use reqres to log user in.
  const [status,setStatus] = useState(false);
  const [user,setUser]= useState({
      username:"",
      password:""
  });
  const handleSubmit=()=>{
      if(status===true){
          setStatus(false);

      }
      axios.post("http://reqres.in/api/login", user).then(setStatus(true));

  }

  const handleChange=(e)=>{
    const {id,value} = target.value;
    setUser({...user,[id]:value})

  }
    return (
      <form className="loginform" onClick={handleSubmit}>
        <input onChange={handleChange}
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input onChange={handleChange}
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };
