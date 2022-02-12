import type { AppProps } from 'next/app'
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core'

function CustomApp({ Component, pageProps }: AppProps) {
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
export default CustomApp
