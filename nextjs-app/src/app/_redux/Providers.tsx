"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { FunctionComponent, ReactNode } from "react";
interface ProvidersProps {
  children: ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
