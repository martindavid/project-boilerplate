import type { AppProps } from 'next/app'
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}>
        <NormalizeCSS />
        <GlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
export default MyApp
