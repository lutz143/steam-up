import { NavLink } from "react-router-dom";
import PageContainer from "../containers/PageContainer";
import classes from "../containers/Header.js";
import LoginForm from "../components/LoginForm";

const handleClick = () => {
  // Code to handle button click
};

function Login() {
  return (
    <PageContainer>
      <LoginForm></LoginForm>
      <button onClick={handleClick} type="submit" variant="success">
        <NavLink to="/signup">Sign Up!</NavLink>
      </button>
    </PageContainer>
  );
}

export default Login;
