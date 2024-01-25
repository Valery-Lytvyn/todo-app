import React, { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import GlobalStyleProvider from "./GlobalStyleProvider";
import StateProvider from "./StateProvider";
import ThemeProvider from "../components/themes/ThemeProvider";
import Loading from "../loading";

interface ProviderProps {
  children: React.ReactNode;
}

function Providers({ children }: ProviderProps) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <Toaster />
        <GlobalStyleProvider>
          <StateProvider>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </StateProvider>
        </GlobalStyleProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default Providers;
