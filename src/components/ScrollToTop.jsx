import React,{useEffect, useState} from 'react'

export default function ScrollToTop() {
    
    const [visible, setVisible] = useState(false) //for the button

    const handleScroll = () => {
        const scrollTop = (window.scrollY)
        scrollTop>400? setVisible(true) : setVisible(false)   
     }

    useEffect(() => {
     window.addEventListener('scroll', handleScroll)
    
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    
    const handleScrollToTop = () => {
        console.log("clicked scroll");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }
  return (
    <div className={`fixed rounded-full h-[40px] w-[40px] bottom-[15px] right-[15px] z-50 bg-slate-300 border-emerald-700 border-2 shadow-lg transition-all duration-200 ${visible?' opacity-100':' opacity-0'}`} onClick={handleScrollToTop}></div>
  )
}
