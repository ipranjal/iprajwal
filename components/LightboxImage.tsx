'use client'

import { useState } from 'react'

interface Props {
  src: string
  alt: string
  imgClassName?: string
  containerClassName?: string
}

export default function LightboxImage({
  src,
  alt,
  imgClassName = '',
  containerClassName = '',
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className={`relative group cursor-pointer ${containerClassName}`}
        onClick={() => setOpen(true)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={imgClassName} />
        <div className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-50 transition">
          <i className="fas fa-search-plus text-white text-4xl" />
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
