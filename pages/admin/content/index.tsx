import Head from 'next/head'
import React from 'react'
import Layout from '../../../components/Layout'

export default function index() {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
            </Head>
            <Layout>
                <div>
                    <div>
                        <h3>Konten</h3>
                    </div>
                    <table className='table table-stripper'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>No Telepon</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Hilmi</td>
                                <td>hilmi@gmail.com</td>
                                <td>085700330044</td>
                                <td>Admin</td>
                                <td>
                                    <a className='text-success'>Edit</a>
                                    <a className='text-danger ms-4'>Hapus</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    )
}