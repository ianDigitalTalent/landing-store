import React, { useState } from 'react'
import Image from 'next/image'
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'

export const Clientes = () => {
const SliderData = [
    {
        image : "/clientes1.png"
    },
    {
        image : "/clientes2.png"
    },
    {
        image : "/clientes3.png"
    },
    {
        image : "/clientes4.png"
    },
    
]

const [current,setCurrent] = useState(0);
const lengthArray = SliderData.length

const nextSlide = () =>{
    setCurrent(current === lengthArray-1 ? 0 : current +1);
}

const prevSlide = () =>{
    setCurrent(current === 0 ? lengthArray-1 : current-1);
}

if(!Array.isArray(SliderData) || lengthArray <=0 ){
    return null
}
    return (
        <>
        <div className="slider">
            <FaChevronLeft className="left-arrow" onClick={prevSlide}/>
           {SliderData.map((slide,index)=>{
                return ( 
                    <div className={index === current ? 'slide-active' : 'slide' } key={index}>
                        {index===current && (<Image src={slide.image} alt="imagen" width={2160} height={460} ></Image>)}
                    </div>
                )
            })} 
            <FaChevronRight className="right-arrow" onClick={nextSlide}/>
        </div>
        </>
    )
}

export default Clientes;