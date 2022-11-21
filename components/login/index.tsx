import React from 'react'
import { Form } from 'react-bootstrap'
import Input from '../Input/Input'

export default function LoginPage() {
    return (
        <div className='bg-login'>
            <div className='card-center'>
                <div className='card-login'>
                    <h5 className='text-center'>
                        ADMIN<br />
                        PT MULTIVERSE
                    </h5>
                    <div>
                        <Form method='post'>
                            <Input label='Email' className='form-control' placeholder='Masukkan Email' name='email' type={'email'} />
                            <Input label='Password' className='form-control' placeholder='Masukkan Password' name='password' type={'password'} />
                            <button style={{marginTop:30}} className='btn btn-primary w-100'>LOGIN</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
