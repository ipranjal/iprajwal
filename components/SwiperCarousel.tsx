'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

interface Props {
  images: { src: string; alt: string }[]
}

export default function SwiperCarousel({ images }: Props) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop
      autoplay={{ delay: 5000 }}
      navigation
      className="swiper"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
