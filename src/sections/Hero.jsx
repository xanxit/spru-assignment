import React,{useRef, useEffect} from 'react'

export default function Hero(props) {
  const carouselRef = useRef(null);
  let c=0;

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.scrollBy({
        left: (c==3?-20000:200), 
        behavior: (c==3?'instant':'smooth'),
      });
      c==3?c=0:c++;
    }, 2000);

    return () => clearInterval(interval);
  }, []); //when it loops back wait is too long use setInterval instead


  return (
    <>
    <div className='w-full flex overflow-x-hidden snap-x snap-mandatory' ref={carouselRef}>
        {(props.data).map((record, index) => {
            return <img src={record} alt="" className='w-full shrink-0 snap-center' key={index} />
        })}
    </div>
    </>
  )
}
