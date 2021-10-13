import { Layout } from '@components/layout/Layout'
import type { NextPage } from 'next'
import * as React from 'react'
import { Row, Col } from "react-bootstrap"

const Home: NextPage = () => {
  return (
      <Layout>
        <Row>
          <Col xs={12} lg={6}>
            Home Page
          </Col>
        </Row>
      </Layout>
  )
}

export default Home
