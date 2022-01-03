import { useState, useRef, useEffect } from 'react'

const useObserver = ( options ) => {
    const containerRef = useRef(null)

    const [ isVisible, setVisibility ] = useState(false)

    const callbackFn = entries => {
        const [ entry ] = entries
        console.log(entry)      
        
        setVisibility(entry.isIntersecting)
    }

    useEffect(() => {

        const observer = new IntersectionObserver(callbackFn, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [])

    return [containerRef, isVisible]
}

export default useObserver