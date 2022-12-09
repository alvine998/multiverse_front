import react from 'react'

const CardDashboard = (props: any) => {
    return (
        <div className='d-flex flex-row justify-content-evenly'>
            {
                props?.data?.map((val: any, i:number) => (
                    <div key={i} className='bg-info h-25 w-25 rounded py-1'>
                        <p className='text-center text-white fs-5'>{val?.title}</p>
                        <p className='text-center text-white fs-5'>{val?.total}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CardDashboard