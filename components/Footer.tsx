import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { email2, instagram, map, multi, whatsapp2 } from '../assets'
import { Config } from '../config'

export default function Footer() {
    const [data, setData] = useState<any>()
    const getProfile = async () => {
        try {
            const result = await axios.get(`${Config.base_url_api.base}/profiles/`)
            setData(result.data.result[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getProfile()
    },[])
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
                        <div>
                            <Link href={'/about'}>
                                <p className='fs-5 text-black'>About</p>
                            </Link>
                            <Link href={'/product'}>
                                <p className='fs-5 text-black' style={{marginTop:-20}}>Product</p>
                            </Link>
                            <Link href={'/contact'}>
                                <p className='fs-5 text-black' style={{marginTop:-20}}>Contacts</p>
                            </Link>
                        </div>
                    </div>
                    <div className='d-flex flex-row gap-3 ms-5'>
                        <Link href={`https://wa.me/${data?.Phone?.replace("+", "")}/?text=Hello%2C%20World!`}>
                            <Image src={whatsapp2} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                        </Link>
                        <Link target={'_blank'} href={`mailto:${data?.Email}`}>
                            <Image src={email2} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                        </Link>
                        <Link target={'_blank'} href={'https://instagram.com/'}>
                            <Image src={instagram} alt="connect" width={35} height={35} style={{ borderRadius: '20px' }} />
                        </Link>
                        <Link target={'_blank'} href={'https://www.google.com/maps/place/PT+UNIVERSE+SOLUSI+DIGITAL/@-6.1077868,106.6180349,12z/data=!4m10!1m2!2m1!1spt+multiverse!3m6!1s0x2e69f5caa2f92667:0x8ffaa52281733371!8m2!3d-6.2080777!4d106.8204522!15sCg1wdCBtdWx0aXZlcnNlkgEQc29mdHdhcmVfY29tcGFueeABAA!16s%2Fg%2F11jt04mf8x'}>
                            <Image src={map} alt="connect" width={35} height={35} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
