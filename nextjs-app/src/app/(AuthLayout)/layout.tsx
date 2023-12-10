import { FunctionComponent, ReactNode } from "react";
import Header from "./_layoutComponents/Header";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-[100vh] overflow-hidden bg-[#fff]">
      <Header></Header>
      <div className="flex">{children}</div>
    </div>
  );
};

export default AuthLayout;
