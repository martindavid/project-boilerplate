import '../styles/global.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from '@auth0/nextjs-auth0'

const queryClient = new QueryClient()

interface AppPropsWithError extends AppProps {
  err: unknown
}

function CustomApp({ Component, pageProps, err }: AppPropsWithError) {
  return (
    <>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} err={err} />
        </QueryClientProvider>
      </UserProvider>
    </>
  )
}
export default CustomApp
