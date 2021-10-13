import * as React from 'react'
import { Container, Navbar, NavDropdown } from 'react-bootstrap'
import styles from './Header.module.scss'

export type HeaderProps = {
  id?: string
}

export const Header = (props: HeaderProps) => {

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className={styles.navbarArea}>
        <Container>
          <Navbar.Brand href="/">
            <img className={styles.logo} src="/images/vercel.svg" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
              <NavDropdown
                title="User"
                id="navbarScrollingDropdown">
                <NavDropdown.Item role="button">
                  Disconnect
                </NavDropdown.Item>
              </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
