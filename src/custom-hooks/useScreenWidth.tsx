import React from 'react'

function useScreenWidth() {
    const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);
    React.useEffect(()=>{
        const handleWindowSizeChange = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[])
    return {screenWidth};
}

export default useScreenWidth