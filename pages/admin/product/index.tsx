import Head from 'next/head'
import React from 'react'
import BreadsCrumb from '../../../components/BreadsCrumb'
import Layout from '../../../components/Layout'
import { useState } from 'react'
import ModalAccount from '../../../components/Modals/ModalAccount'
import ModalCategory from '../../../components/Modals/ModalCategory'
import ModalProduct from '../../../components/Modals/ModalProduct'

export default function index() {
    const [toggle, setToggle] = useState<boolean>(false)
    const [keys, setKeys] = useState<string>()
    const [toggleData, setToggleData] = useState<any>()

    return (
        <div>
            <Layout>
                <div>
                    <div>
                        <h3>Data Produk</h3>
                    </div>
                    <div className='pt-5 pb-2'>
                        <button onClick={() => {
                            setToggle(!toggle)
                            setKeys('create')
                            setToggleData(null)
                        }} className='btn btn-primary'>
                            Tambah Produk
                        </button>
                    </div>

                    <table className='table table-stripper'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Produk</th>
                                <th>Kategori</th>
                                <th>Harga</th>
                                <th>Keterangan</th>
                                <th>Stok</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Produk 1</td>
                                <td>Anti-Aging</td>
                                <td>96.000</td>
                                <td>Produk anti aging</td>
                                <td>20</td>
                                <td>Available</td>
                                <td>
                                    <a href='#edit' onClick={() => {
                                        setToggle(!toggle)
                                        setKeys('update')
                                        setToggleData('')
                                    }} className='text-success'>Edit</a>
                                    <a onClick={() => {
                                        setToggle(!toggle)
                                        setKeys('delete')
                                        setToggleData('')
                                    }} href='#delete' className='text-danger ms-4'>Hapus</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    <ModalProduct toggle={toggle} setToggle={setToggle} keys={keys} />

                </div>
            </Layout>
        </div>
    )
}
