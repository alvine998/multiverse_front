import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Form } from 'react-bootstrap'
import { mail } from '../../assets'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function index() {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <Navbar>
                <div className='bg-default-2'>
                    <div className='position-mail'>
                        <Image alt='mails' src={mail} className='z-7' width={100} height={80} />
                    </div>
                    <div className='d-flex justify-content-center' style={{paddingTop:90}}>
                        <div className='box-mailing'>
                            <div>
                                <Form>
                                    <input className='form-control' placeholder='Enter your name' required />
                                    <input className='form-control mt-2' placeholder='Enter company' required />
                                    <input className='form-control mt-2' placeholder='Enter phone number' required />
                                    <input className='form-control mt-2' placeholder='Enter email' type={'email'} required />
                                    <textarea className='form-control mt-2' placeholder='Enter message' required />
                                    <button className='btn btn-warning mt-2 w-100 text-white'>
                                        Connect
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
