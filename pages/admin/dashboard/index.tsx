import React from 'react'
import CardDashboard from '../../../components/CardDashboard'
import Layout from '../../../components/Layout'

export default function index() {

  const data = [
    {
      title: 'Produk',
      total: 50
    },
    {
      title: 'Kategori',
      total: 10
    }
  ]
  return (
    <Layout>
      <div>
        <div className='notification-success p-3'>
          <p className='fs-5'>Welcome to Dashboard Admin PT Multiverse</p>
        </div>

        <div className='mt-5'>
          <CardDashboard data={data} />
        </div>
      </div>
    </Layout>
  )
}
