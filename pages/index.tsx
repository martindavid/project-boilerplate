import { Layout } from '@components/layout/Layout'
import type { NextPage } from 'next'
import { Grid, Col } from '@mantine/core'
import * as React from 'react'

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid>
        <Col span={12} xs={12} lg={6}>
          Home Page
        </Col>
      </Grid>
    </Layout>
  )
}

export default Home
