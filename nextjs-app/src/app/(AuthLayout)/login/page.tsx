import { Fragment, FunctionComponent } from "react";
import Login from "../_components/login";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  return (
    <Fragment>
      <div className="w-[41.6666666667%] h-[100vh] bg-[url('https://uitheme.net/sociala/images/login-bg.jpg')] bg-no-repeat bg-cover"></div>
      <div className="px-[15px] flex-1">
        <div className="py-[100px]">
          <Login></Login>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
