import Head from 'next/head'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({ children }: any) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col>
          <div className='-ml-2'>
            <Topbar />
            <div className='p-3'>
              {children}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
