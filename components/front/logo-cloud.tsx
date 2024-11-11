import Image from 'next/image'
import React from 'react'

const logos = [
  {
    alt: 'school name',
    src: 'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg',
  },
  {
    alt: 'school name',
    src: 'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg',
  },
  {
    alt: 'school name',
    src: 'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg',
  },
  {
    alt: 'school name',
    src: 'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg',
  },
]
function LogoCloud() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900/70">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center place-items-center grid-flow-dense gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 ">
          {logos.map((logo, i) => (
            <Image
              key={i}
              className="opacity-70 hover:opacity-95  col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo.src}
              alt={logo.alt}
              width="158"
              height="48"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
