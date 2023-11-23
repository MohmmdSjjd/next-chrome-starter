import { ChakraProvider } from "@chakra-ui/react";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <SWRConfig value={{
          refreshInterval: 3000
        }}>
          <Component {...pageProps} />
        </SWRConfig>
      </ChakraProvider>
    </>
  );
}
