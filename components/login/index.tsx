import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Input from '../Input/Input'

export default function LoginPage() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const login = (e: any) => {
        e.preventDefault()
        const payloadData = {
            email: email,
            password: password
        }
        console.log(payloadData)
    }
    return (
        <div className='bg-login'>
            <div className='card-center'>
                <div className='card-login'>
                    <h5 className='text-center'>
                        ADMIN<br />
                        PT MULTIVERSE
                    </h5>
                    <div>
                        <Form method='post' onSubmit={login} action="#">
                            <Input label='Email' className='form-control' placeholder='Masukkan Email' name='email' defaultValue={email} onChange={(e: any) => setEmail(e.target.value)} type={'email'} />
                            <Input label='Password' className='form-control' placeholder='Masukkan Password' name='password' defaultValue={password} onChange={(e: any) => setPassword(e.target.value)} type={'password'} />
                            <button style={{ marginTop: 30 }} className='btn btn-primary w-100'>LOGIN</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
