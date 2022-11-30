import Image from 'next/image'
import React from 'react'
import { indomap } from '../../assets'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function index() {
    return (
        <div>
            <Navbar>

            </Navbar>
            <div className='px-5'>
                <div className='bg-default-2'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='box-title'>
                            <h5 className='text-center text-white'>Our Vision & Mission</h5>
                        </div>
                        <div className='box-vm mt-3'>
                            <p className='text-center px-2'>
                                Recognized as the leader of chemical raw materials distribution
                                industry by all related industry players.
                            </p>
                        </div>
                        <div className='d-flex flex-row justify-content-around gap-5'>
                            <div className='box-vm mt-3'>
                                <p className='text-center px-2'>
                                    Deliver superior quality chemical products that contribute
                                    positive impact to our customer`s business growth.
                                </p>
                            </div>
                            <div className='box-vm mt-3'>
                                <p className='text-center px-2'>
                                    Forging meaningful, lifelong engagement and partnership with our
                                    customer through customer centric offer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h5 className='mt-4 text-center'>We supply on a nationwide</h5>
                    <div className='d-flex justify-content-center'>
                        <Image alt='maps' src={indomap} />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}