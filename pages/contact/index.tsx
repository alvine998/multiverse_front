import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { mail } from '../../assets'
import FadeInSection from '../../components/FadeInSection'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Config } from '../../config'

export default function Contact() {

    const [payload, setPayload] = useState<any>()

    const handleChange = (e: any) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }

    const route = useRouter()

    const sendingEmail = async (e: any) => {
        e.preventDefault()
        const payloadData = {
            email: 'vira@ptmultiverse.com',
            subject: 'Customer Mail Box',
            message: `Hello, I'm ${payload?.name}-[${payload?.phone}]-[${payload?.email}] from ${payload?.company} company. ${payload?.message} `
        }
        try {
            console.log(payloadData)
            const result = await axios.post(`${Config.base_url_api.base}/sending/mail`, payloadData)
            Swal.fire({
                text: 'Thank you for contacting us!',
                icon: 'success'
            })
            route.push('/')
        } catch (error) {
            console.log(error);
            Swal.fire({
                text: 'Internal Server Error! Please Wait...',
                icon: 'error'
            })
        }
    }
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <Navbar>
                <FadeInSection>
                    <div className='bg-default-2'>
                        <div className='position-mail'>
                            <Image alt='mails' src={mail} className='z-7' width={100} height={80} />
                        </div>
                        <div className='d-flex justify-content-center' style={{ paddingTop: 90 }}>
                            <div className='box-mailing'>
                                <div>
                                    <Form action={"#"} method="post" onSubmit={sendingEmail} >
                                        <input name='name' onChange={handleChange} className='form-control' placeholder='Enter your name' required />
                                        <input name='company' onChange={handleChange} className='form-control mt-2' placeholder='Enter company' required />
                                        <input name='phone' onChange={handleChange} className='form-control mt-2' placeholder='Enter phone number' required />
                                        <input name='email' onChange={handleChange} className='form-control mt-2' placeholder='Enter email' type={'email'} required />
                                        <textarea name='message' onChange={handleChange} className='form-control mt-2' placeholder='Enter message' required />
                                        <button className='btn btn-warning mt-2 w-100 text-white'>
                                            Connect
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </Navbar>
            <div>
                <Footer />
            </div>
        </div>
    )
}
