import React from 'react'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Link from 'next/link';

export default function SideProduct(props: any) {

    return (
        <div>
            <h5 className='ms-5'>Product Category</h5>
            <div className='line-pink' />
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ height: '100%', flexGrow: 1, maxWidth: '100%', overflowY: 'auto' }}
                className='ms-5'
            >
                {
                    props?.items?.categories?.map((v: any, i: number) => (
                        <>
                            <TreeItem nodeId={`${i}`} label={v?.Name}>
                                {
                                    props?.items?.sub?.filter((val: any) => val?.Category_id == v?.ID)?.map((val: any, idx: number) => (
                                        <>
                                            <Link href={{query:{category_id: v.ID, subcategory_id: val.ID}}}>
                                                <TreeItem nodeId={`${v?.ID + 1}`} label={val?.Name} />
                                            </Link>
                                        </>
                                    ))
                                }
                            </TreeItem>
                        </>
                    ))
                }
            </TreeView>
        </div>
    )
}
