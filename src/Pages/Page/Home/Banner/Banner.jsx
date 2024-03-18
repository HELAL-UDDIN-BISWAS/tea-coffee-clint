import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import carousel from  "./../../../../../public/Image/Carousel3.jpg"
import carousel1 from  "./../../../../../public/Image/Carousel4.jpg"
import carousel2 from  "./../../../../../public/Image/Carousel2.jpg"


export const Banner = () => {
  return (
    <Carousel 
      showControls={true}
      leftControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineLeft size={20} weight="bold" color="white" />
        </span>
      }
      rightControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineRight size={20} weight="bold" color="white" />
        </span>
      }>
      <img 
        src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
        alt="slider-1"
      />
      <img 
        src={carousel}
        alt="slider-3"
      /> 
      <img 
        src={carousel2}
        alt="slider-2"
      />
      {/* <img 
        src="https://images.prismic.io/staticmania/dee3ff09-3ddc-4340-bc8f-ea0028bb4a61_2.png?auto=compress,format"
        alt="slider-2"
      /> */}
      <img 
        src={carousel1}
        alt="slider-4"
      />
    </Carousel>
  )
}
