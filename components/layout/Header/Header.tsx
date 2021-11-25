import * as React from 'react'
import { Header as MHeader, MediaQuery, Burger, Text } from '@mantine/core'

export type HeaderProps = {
  id?: string
}

export const Header = (props: HeaderProps) => {
  const [opened, setOpened] = React.useState(false)
  return (
    <>
      <MHeader height={70} padding="md">
        {/* You can handle other responsive styles with MediaQuery component or createStyles function */}
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={() => setOpened(o => !o)} size="sm" mr="xl" />
          </MediaQuery>

          <img src="/images/vercel.svg" alt="Logo" />
          <Text>Application header</Text>
        </div>
      </MHeader>
    </>
  )
}
