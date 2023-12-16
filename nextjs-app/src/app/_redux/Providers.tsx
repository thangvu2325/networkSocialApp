"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { FunctionComponent, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
interface ProvidersProps {
  children: ReactNode;
}
const queryClient = new QueryClient();
const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Provider store={store}>{children}</Provider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
