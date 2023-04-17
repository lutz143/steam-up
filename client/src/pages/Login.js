import { NavLink } from "react-router-dom";
import PageContainer from "../containers/PageContainer";
import LoginForm from "../components/LoginForm";

import classes from "./Login.module.css";

const handleClick = () => {
  // Code to handle button click
};

function Login() {
  return (
    <PageContainer>
      <LoginForm />
      <button
        onClick={handleClick}
        type="submit"
        variant="success"
        className={classes.signUpBtn}
      >
        <NavLink to="/signup">New here? Sign up!</NavLink>
      </button>
    </PageContainer>
  );
}

export default Login;
