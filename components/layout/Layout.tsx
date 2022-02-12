import * as React from 'react'
import Head from 'next/head'
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const [opened, setOpened] = React.useState(false)
  const theme = useMantineTheme()

  return (
    <>
      <Head>
        <title>Project Boilerplate</title>
        <meta name="description" content="Project Boilerplate" />
      </Head>
      <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar padding="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 400 }}>
            <Navbar.Section>First section</Navbar.Section>
            <Navbar.Section>Grow section</Navbar.Section>
            <Navbar.Section>Last section</Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={70} padding="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened(o => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Project Boilerplate</Text>
            </div>
          </Header>
        }>
        {children}
      </AppShell>
    </>
  )
}
