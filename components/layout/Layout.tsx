import Head from 'next/head'
import * as React from 'react'
import { Container } from '@mantine/core'
import { Header } from './Header/Header'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Project Boilerplate</title>
        <meta name="description" content="Project Boilerplate" />
      </Head>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </>
  )
}
