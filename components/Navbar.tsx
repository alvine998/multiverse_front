import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Navbar({ children }: any) {
    const { pathname } = useRouter()
    const [names, setNames] = useState<any>()
    const setupNav = () => {
        if (pathname?.includes('about') || pathname?.includes('product') || pathname?.includes('contact')) {
            setNames('nav-link active text-black fw-bold fs-5')
        } else {
            setNames('nav-link active text-white fw-bold fs-5')
        }
    }

    useEffect(() => {
        setupNav()
    },[])
    return (
        <div className='z-2 pt-3 pe-5'>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link href={'/'}>
                        <p className={names} aria-current="page">HOME</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={'/about'}>
                        <p className={names}>ABOUT</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={'/product'}>
                        <p className={names}>PRODUCT</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={'/contact'}>
                        <p className={names}>CONTACT</p>
                    </Link>
                </li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}
