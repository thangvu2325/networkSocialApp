"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { FunctionComponent, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
interface ProvidersProps {
  children: ReactNode;
}
const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default Providers;
