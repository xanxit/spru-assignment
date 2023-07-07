import React,{useRef,useEffect} from 'react'
import TestCard from '../components/TestCard'

export default function Testimonials(props) {

  const carouselRef = useRef(null);
  let c=0;

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.scrollBy({
        left: (c==3?-20000:200), 
        behavior: (c==3?'instant':'smooth'),
      });
      c==3?c=0:c++;
    }, 5000);

    return () => clearInterval(interval);
  }, []); //when it loops back wait is too long use setInterval instead

  return (
    <div className='py-[30px] sm:py-[70px] text-center bg-slate-100'>
        <div className='px-[15px] xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto'>
        <div className='mb-[38px] sm:mb-[63px]'>
        <h1 className='font-sans text-[28px] sm:text-[38px] mb-[5px] sm:mb-[15px] leading-[38px] font-[700] '>Our Testimonials</h1>
        </div>
        <div className='w-full flex overflow-hidden gap-[30px] justify-between snap-x snap-mandatory' ref={carouselRef}>
            {(props.data).map((record, index) => {
                return <TestCard key={index} {...record}/>
            })}
            {(props.data).map((record, index) => {
                return <TestCard key={index} {...record}/>
            })}
        </div>
        </div>
    </div>
  )
}
