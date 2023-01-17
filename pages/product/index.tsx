import axios from 'axios'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import FadeInSection from '../../components/FadeInSection'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SideProduct from '../../components/SideProduct'
import { Config } from '../../config'
import { useRouter } from 'next/router'

export default function index() {
    const [items, setItems] = useState<any>()
    const getProducts = async () => {
        try {
            const result = await axios.get(`${Config.base_url_api.base}/categories/`)
            const resultSub = await axios.get(`${Config.base_url_api.base}/subcategories/`)
            const resultProd = await axios.get(`${Config.base_url_api.base}/products/`)
            setItems({
                categories: result.data.result,
                sub: resultSub.data.result,
                prod: resultProd.data.result
            })
        } catch (error) {
            console.log(error);
        }
    }

    const router = useRouter()
    const data = router.query

    useEffect(() => {
        getProducts()
        console.log(data, 'ddd');
    }, [data])
    return (
        <div>
            <Head>
                <title>List Product</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
            </Head>
            <Navbar></Navbar>
            <FadeInSection>
                <div>
                    <div className='d-flex flex-row overflow-hidden'>
                        <div className='mt-3'>
                            <SideProduct items={items} />
                        </div>
                        <div>
                            <div className='box-product'>
                                <div className='d-flex flex-row align-items-center justify-content-around'>
                                    <p className='fs-5 ms-4 mt-2'>{items?.categories?.find((v: any) => v.ID == data.category_id)?.Name?.toUpperCase()} / {items?.sub?.find((v: any) => v.ID == data.subcategory_id)?.Name?.toUpperCase()}</p>
                                    <div className='box-search'>
                                        <input type={'text'} className='form-control' placeholder='Search' />
                                    </div>
                                </div>
                            </div>
                            <div className='box-product-2'>
                                {
                                    items?.prod?.filter((v:any) => v?.Category_id == data?.category_id && v?.Subcategory_id == data?.subcategory_id)?.map((v: any, i: number) => (
                                        <div className='d-flex flex-row gap-5'>
                                            <p className='fs-4 fw-bold'>{`${("-" + v?.Name) || ""}`}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <Footer />
        </div>
    )
}
