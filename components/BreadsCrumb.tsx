import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

export default function BreadsCrumb(props: any) {
    return (
        <div>
            <Breadcrumbs aria-label='breadcrumb' >
                {
                    props?.items?.map((v: any) => (
                        <div>
                            {
                                v?.current !== true ? <>
                                    <Link underline='hover' color={'inherit'} href={v?.href}>
                                        {v?.label}
                                    </Link>
                                </> : <>
                                    <Typography color={'text.primary'}>{v?.label}</Typography>
                                </>
                            }
                        </div>
                    ))
                }
            </Breadcrumbs>
        </div>
    )
}
