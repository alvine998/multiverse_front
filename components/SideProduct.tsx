import React from 'react'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export default function SideProduct() {

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
                <TreeItem nodeId="1" label="Cosmetic">
                    <TreeItem nodeId="2" label="All Cosmetic" />
                    <TreeItem nodeId="2" label="Anti-Acne" />
                    <TreeItem nodeId="2" label="Anti-Aging" />
                    <TreeItem nodeId="2" label="Moisturizing" />
                    <TreeItem nodeId="2" label="Solubilizer" />
                    <TreeItem nodeId="2" label="Vitamin" />
                </TreeItem>
                <TreeItem nodeId="3" label="Food And Beverage">
                    <TreeItem nodeId="4" label="All Cosmetic" />
                    <TreeItem nodeId="4" label="Anti-Acne" />
                    <TreeItem nodeId="5" label="Anti-Aging" />
                    <TreeItem nodeId="6" label="Moisturizing" />
                    <TreeItem nodeId="4" label="Solubilizer" />
                    <TreeItem nodeId="4" label="Vitamin" />
                </TreeItem>
                <TreeItem nodeId="7" label="Chemical">
                    <TreeItem nodeId="2" label="All Cosmetic" />
                    <TreeItem nodeId="2" label="Anti-Acne" />
                    <TreeItem nodeId="2" label="Anti-Aging" />
                    <TreeItem nodeId="2" label="Moisturizing" />
                    <TreeItem nodeId="2" label="Solubilizer" />
                    <TreeItem nodeId="2" label="Vitamin" />
                </TreeItem>
            </TreeView>
        </div>
    )
}
