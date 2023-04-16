import PageContainer from "../containers/PageContainer";
import classes from "../containers/Header.js";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function SignUp() {
  return (
    <PageContainer>
      <SignupForm className={classes.login}></SignupForm>
    </PageContainer>
  );
}

export default SignUp;
