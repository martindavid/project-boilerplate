import { Header, Sidebar } from '@components/Layout'
import Head from 'next/head'
import * as React from 'react'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true)

  return (
    <>
      <Head>
        <title>Project Boilerplate</title>
        <meta name="description" content="Project Boilerplate" />
      </Head>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}
