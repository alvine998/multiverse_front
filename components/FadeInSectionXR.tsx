import { useEffect, useRef, useState } from "react"

const FadeInSectionXR = ({children}:any) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const domRef : any= useRef()

    useEffect(()=>{
        const observer = new IntersectionObserver((entries:any) => {
            entries.forEach((entry:any) => {
                console.log(`entry`, entry, `is = `, entry.isIntersecting)
                setIsVisible(entry.isIntersecting)
            })
        })

        const {current} = domRef
        observer.observe(current)
    },[])

    return(
        <>
            <div className={`fade-in-section-xr ${isVisible ? "is-visible" : ""}`} ref={domRef}>
                {children}
            </div>
        </>
    )
}

export default FadeInSectionXR