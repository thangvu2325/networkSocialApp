import { Fragment, FunctionComponent } from "react";
import Register from "../_components/register";

interface RegisterPageProps {}

const RegisterPage: FunctionComponent<RegisterPageProps> = () => {
  return (
    <Fragment>
      <div className="w-[41.6666666667%] h-[100vh] bg-[url('https://uitheme.net/sociala/images/login-bg-2.jpg')] bg-no-repeat bg-cover"></div>
      <div className="px-[15px] flex-1">
        <div className="py-[100px]">
          <Register></Register>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterPage;
