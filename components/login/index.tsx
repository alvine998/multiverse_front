import axios from 'axios'
import React, { useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import Input from '../Input/Input'

export default function LoginPage() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>()
    const login = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        const payloadData = {
            email: email,
            password: password
        }
        console.log(payloadData)
        try {
            const result = await axios.post(`https://multiverseback.herokuapp.com/users/login`, payloadData)
            setIsLoading(false)
            setMessage('')
        } catch (error) {
            console.log(error);
            setIsLoading(false)
            setMessage('Email atau password salah!')
        }
    }
    return (
        <div className='bg-login'>
            <div className='card-center'>
                <div className='card-login'>
                    <p className='text-center fs-5'>
                        ADMIN<br />
                        PT MULTIVERSE
                    </p>
                    <div>
                        <Form method='post' onSubmit={login} action="#">
                            <Input label='Email' className='form-control' required placeholder='Masukkan Email' name='email' defaultValue={email} onChange={(e: any) => setEmail(e.target.value)} type={'email'} />
                            <Input label='Password' className='form-control' required placeholder='Masukkan Password' name='password' defaultValue={password} onChange={(e: any) => setPassword(e.target.value)} type={'password'} />
                            <div>
                                {
                                    isLoading ? <div className='d-flex flex-row justify-content-center mt-2'>
                                        <p className='text-black'>Waiting....</p>
                                        <Spinner className='ml-2' variant='warning' />
                                    </div> :
                                        <div className='mt-2'>
                                            <p className='text-danger'>{message}</p>
                                            <button className='btn btn-primary w-100'>LOGIN</button>
                                        </div>
                                }
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
