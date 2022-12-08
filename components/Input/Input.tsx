import React, { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
}

const defaultStyles = 'form-control'

export default function Input(props: Props) {
    return (
        <div  style={{marginTop:20}} >
            {
                props.label ? <label className='form-label'>{props.label}</label> : ''
            }
            <input className='form-control' {...props}/>
        </div>
    )
}
