import Image from 'next/image'
import React from 'react'
import { email2, instagram, map, multi, whatsapp2 } from '../assets'

export default function Footer() {
    return (
        <div>
            <hr />
            <div className='px-5'>
                <div className='d-flex align-items-center justify-content-between gap-5'>
                    <div>
                        <Image src={multi} alt="connect" />
                        <p className='mt-3'>
                            Golden City Business Park<br />
                            Blok A9 Cipondoh - Tangerang<br />
                            15148, Indonesia
                        </p>
                    </div>
                    <div className='ms-5'>
                        <p className='fs-5 fw-bold' >Company</p>
                        <p className='fs-5'>
                            <a>About</a><br />
                            <a>Product</a><br />
                            <a>Contacts</a><br />
                        </p>
                    </div>
                    <div className='d-flex flex-row gap-3 ms-5'>
                        <Image src={whatsapp2} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                        <Image src={email2} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                        <Image src={instagram} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                        <Image src={map} alt="connect" width={35} height={35} />
                    </div>
                </div>
            </div>
        </div>
    )
}
