import React from 'react'
import Layout from '../../../components/Layout'
import { useState } from 'react'
import ModalCategory from '../../../components/Modals/ModalCategory'

export default function Category() {
    const [toggle, setToggle] = useState<boolean>(false)
    const [keys, setKeys] = useState<string>()
    const [toggleData, setToggleData] = useState<any>()

    return (
        <div>
            <Layout>
                <div>
                    <div>
                        <h3>Kategori</h3>
                    </div>
                    <div className='pt-5 pb-2'>
                        <button onClick={() => {
                            setToggle(!toggle)
                            setKeys('create')
                            setToggleData(null)
                        }} className='btn btn-primary'>
                            Tambah Kategori
                        </button>
                    </div>

                    <table className='table table-stripper'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Kategori</th>
                                <th>Sub Kategori</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Hilmi</td>
                                <td>hilmi@gmail.com</td>
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


                    <ModalCategory toggle={toggle} setToggle={setToggle} keys={keys} />

                </div>
            </Layout>
        </div>
    )
}
