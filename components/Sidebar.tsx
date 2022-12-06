import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { TreeItem, TreeView } from '@mui/lab'
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
        <div className='mt-5'>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMore />}
            defaultExpandIcon={<ChevronRight />}
            sx={{ height: '100%', flexGrow: 1, maxWidth: '100%', overflowY: 'auto' }}
            className='ms-3 bg-info'
          >
            <TreeItem nodeId="1" label="Content">
              <TreeItem nodeId="2" label="Profile" />
              <TreeItem nodeId="3" label="Banner Promo" />
              <TreeItem nodeId="4" label="Mailing" />
            </TreeItem>
            <TreeItem nodeId="5" label="Products">
              <TreeItem nodeId="6" label="Data Category" />
              <TreeItem nodeId="7" label="Data Product" />
            </TreeItem>
            <TreeItem nodeId="8" label="Setting">
              <TreeItem nodeId="9" label="Admin Account" />
            </TreeItem>
          </TreeView>
        </div>
      </div>
    </div>
  )
}
