import Head from 'next/head'
import * as React from 'react'
import { Container } from 'react-bootstrap'

import { Header } from './Header/Header'
import styles from './Layout.module.scss'

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
      <Container fluid className="p-4 vh-100">
        <Header />
        <main
          className={styles.mainContent}>
          {children}
        </main>
      </Container>
    </>
  )
}
