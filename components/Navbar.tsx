import React from 'react'

export default function Navbar({children}:any) {
    return (
        <div className='z-2 pt-3 pe-5'>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active text-white fw-bold fs-5" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-bold fs-5" href="#info">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-bold fs-5" href="#">PRODUCT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled text-white fw-bold fs-5" href="#" aria-disabled="true">CONTACT</a>
                </li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}
