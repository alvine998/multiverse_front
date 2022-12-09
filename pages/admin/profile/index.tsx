import Head from 'next/head'
import React from 'react'
import { Form } from 'react-bootstrap'
import Input from '../../../components/Input/Input'
import Layout from '../../../components/Layout'

export default function index() {
    return (
        <div>
            <Layout>
                <div>
                    <div>
                        <h3>Profil Perusahaan</h3>
                    </div>
                    <div>
                        <Form>
                            <div className='row'>
                                <div className='col'>
                                    <Input label='Nama Perusahaan' placeholder='Masukkan nama perusahaan' />
                                </div>
                                <div className='col'>
                                    <Input label='Alamat Perusahaan' placeholder='Masukkan alamat perusahaan' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <Input label='No Telepon / Handphone' placeholder='Masukkan no telepon / handphone' type={'number'} />
                                </div>
                                <div className='col'>
                                    <Input label='Email Perusahaan' placeholder='Masukkan email perusahaan' type={'email'} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <Input label='Latitude' placeholder='-6092829' type={'number'} />
                                </div>
                                <div className='col'>
                                    <Input label='Longitude' placeholder='0987678' type={'number'} />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col'>

                                </div>
                                <div className='col'>
                                    <div className='d-flex justify-content-end'>
                                        <button className='btn btn-success w-50'>
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
