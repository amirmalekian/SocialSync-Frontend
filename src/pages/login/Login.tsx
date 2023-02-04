import { Link } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import myProfile from "../../assets/users/myProf.jpg";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleLogin = () => {
    logIn({
      id: "1",
      email: "amirhossein@gmail.com",
      username: "Amirhossein",
      profilePicture: myProfile,
    });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quae, odio voluptatem neque voluptatibus veritatis perferendis
            praesentium tenetur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
