'use client'
import Image from 'next/image';
import Link from "next/link"
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';

export default function Carousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    console.log(slides.length);
    function slide(direction) {
        const totalSlides = slides.length;
        if (direction === 'forward') {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        } else {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
        }
    }

    useEffect(() => {
        const scrollPosition = currentSlide * carouselRef.current.clientWidth;
        carouselRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });
    }, [currentSlide]);

    return (
        <div className='w-full h-full text-white-primary text-4xl relative'>
            <button onClick={() => slide('backward')} className='absolute top-1/2 -translate-y-1/2 z-10 hover:bg-orange-primary bg-gray-800/30 py-1 transition-all duration-[300]'><IoChevronBack /></button>
            <div ref={carouselRef} className='flex h-full w-full flex-nowrap overflow-x-hidden snap-x'>
                {slides?.map((slide, index) => (
                    <Link key={index} href='' className={`relative h-full w-full flex-none snap-center`}>
                        <Image className='object-contain rounded-md' fill alt={slide} src={slide} />
                    </Link>
                ))}
            </div>
            <button onClick={() => slide('forward')} className='absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:bg-orange-primary bg-gray-800/30 py-1 transition-all duration-[300]'><IoChevronForward /></button>
        </div>
    );
}


