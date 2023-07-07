import React,{useRef,useEffect} from 'react'
import ProductCard from '../components/ProductCard'


export default function Products(props) {

  const carouselRef = useRef(null);
  let c=0;

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.scrollBy({
        left: (c==15?-20000:200), 
        behavior: (c==15?'instant':'smooth'),
      });
      c==15?c=0:c++;
    }, 4000);

    return () => clearInterval(interval);
  }, []); //when it loops back wait is too long use setInterval instead


  return (
    <div className='py-[30px] sm:py-[70px] text-center bg-slate-100'>
    <div className='px-[15px] xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1200px] mx-auto'>
    <div className='mb-[38px] sm:mb-[63px]'>
    <h1 className='font-sans text-[28px] sm:text-[38px] mb-[5px] sm:mb-[15px] leading-[38px] font-[700] '>Our Products</h1>
    </div>
    <div className='w-full flex overflow-hidden gap-[30px] justify-between snap-x snap-mandatory mb-[30px]' ref={carouselRef}>
        {(props.data).map((record, index) => {
            return <ProductCard key={index} img={record}/>
        })}
        {(props.data).map((record, index) => {
            return <ProductCard key={index} img={record}/>
        })}
    </div>
    </div>
</div>
  )
}
