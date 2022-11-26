import React from 'react'

export default function Navbar({children}:any) {
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}
