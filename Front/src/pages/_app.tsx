import { axiosInstance } from "apis/common";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};
type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 2,
            retryDelay: 1000,
            refetchOnWindowFocus: false,
            queryFn: async ({ queryKey }) => {
              const [url, params] = queryKey as [string, any];
              return axiosInstance.get(url as string, params as any);
            },
          },

          mutations: {
            retry: 1,
            retryDelay: 0,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  );
}

export default MyApp;
