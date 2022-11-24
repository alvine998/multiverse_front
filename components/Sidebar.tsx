import Image from 'next/image'
import React from 'react'
import { logo } from '../assets'

export default function Sidebar() {
  return (
    <div>
      <div className='sidebar'>
        <div className='pl-5 pt-3'>
          <Image src={logo} alt='logo multiverse' width={100} height={100} />
        </div>
      </div>
    </div>
  )
}
